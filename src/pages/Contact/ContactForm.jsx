import { useState } from "react";
import { useTranslation } from "react-i18next";
import { isEmailJsConfigured, sendContactEmail } from "../../services/sendEmailService";

const STATUS = {
  sucesso: "success",
  "falha-envio": "error",
  "nao-configurado": "notConfigured",
};

function validar(nome, email, mensagem) {
  if (!nome.trim()) return "nameRequired";
  if (nome.trim().length < 2) return "nameShort";
  if (!email.trim()) return "emailRequired";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) return "emailInvalid";
  if (!mensagem.trim()) return "messageRequired";
  if (mensagem.trim().length < 10) return "messageShort";
  return null;
}

export default function ContactForm() {
  const { t } = useTranslation();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState(null);
  const [status, setStatus] = useState(null);
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    const erroValidacao = validar(nome, email, mensagem);
    setErro(erroValidacao);
    if (erroValidacao) return;

    if (!isEmailJsConfigured()) {
      setStatus("nao-configurado");
      return;
    }

    setEnviando(true);

    try {
      await sendContactEmail({ nome: nome.trim(), email: email.trim(), mensagem: mensagem.trim() });
      setStatus("sucesso");
      setNome("");
      setEmail("");
      setMensagem("");
    } catch (err) {
      console.error("Erro ao enviar e-mail:", err);
      setStatus("falha-envio");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="form__head mono">
        <span>▣ {t("contact.formLabel")}</span>
      </div>

      <div className="form__row">
        <input
          name="name"
          placeholder={t("contact.name")}
          aria-label={t("contact.name")}
          autoComplete="name"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder={t("contact.email")}
          aria-label={t("contact.email")}
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <textarea
        name="message"
        rows={7}
        placeholder={t("contact.message")}
        aria-label={t("contact.message")}
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
      />

      {erro && (
        <p className="form__message form__message--error mono" role="alert">
          {t(`contact.errors.${erro}`)}
        </p>
      )}

      {status && (
        <p className={`form__message form__message--${status === "sucesso" ? "success" : "error"} mono`} role="status">
          {t(`contact.${STATUS[status]}`)}
        </p>
      )}

      <button type="submit" className="form__submit mono" disabled={enviando}>
        {enviando ? t("contact.sending") : t("contact.send")}
      </button>
    </form>
  );
}
