import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Page from "../../components/Page/Page";
import { CONTACTS } from "../../config/siteConfig";
import { useLocale } from "../../i18n/useLocalized";
import ContactForm from "./ContactForm";
import "./Contact.css";

function LocalTime() {
  const { t } = useTranslation();
  const locale = useLocale();
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="clock">
      <p className="mono muted">{t("contact.localTime")}</p>
      <p className="mono muted bracket">{t("contact.city")}</p>
      <p className="clock__time">
        {now.toLocaleTimeString(locale, { timeZone: "America/Sao_Paulo" })}
      </p>
    </section>
  );
}

export default function Contact() {
  const { t } = useTranslation();

  return (
    <Page title={t("contact.title")}>
      <div className="hud">
        <div className="hud__info">
          <div className="hud__head">
            <h1 className="hud__title">{t("contact.title")}</h1>
            <p className="hud__subtitle">{t("contact.subtitle")}</p>
          </div>
          <ContactForm />
        </div>

        <ul className="channels">
          {CONTACTS.map(({ id, label, value, href, icon: Icon, external }) => (
            <li key={id}>
              <a href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
                <Icon className="channels__icon" aria-hidden="true" />
                <span className="channels__label">{label}</span>
                <span className="mono muted">{value}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <LocalTime />
    </Page>
  );
}
