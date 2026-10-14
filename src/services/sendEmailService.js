import emailjs from "@emailjs/browser";
import EMAILJS_CONFIG from "../config/emailJsConfig";

export const isEmailJsConfigured = () =>
  Boolean(
    EMAILJS_CONFIG.SERVICE_ID &&
      EMAILJS_CONFIG.TEMPLATE_ID &&
      EMAILJS_CONFIG.PUBLIC_KEY
  );

export function sendContactEmail({ nome, email, mensagem }) {
  return emailjs.send(
    EMAILJS_CONFIG.SERVICE_ID,
    EMAILJS_CONFIG.TEMPLATE_ID,
    {
      name: nome,
      email: email,
      message: mensagem,
      time: new Date().toLocaleString("pt-BR"),
      title: "Nova mensagem pelo portfólio",
    },
    { publicKey: EMAILJS_CONFIG.PUBLIC_KEY }
  );
}
