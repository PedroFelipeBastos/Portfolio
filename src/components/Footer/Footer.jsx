import { useTranslation } from "react-i18next";
import { CONTACTS } from "../../config/siteConfig";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import "./Footer.css";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__right">
        <LanguageSwitcher />
        <ul className="footer__links">
          {CONTACTS.filter((c) => c.external).map(({ id, label, href }) => (
            <li key={id}>
              <a className="mono" href={href} target="_blank" rel="noreferrer">
                {label} ↗
              </a>
            </li>
          ))}
        </ul>
        <button type="button" className="mono" onClick={() => window.scrollTo(0, 0)}>
          {t("footer.top")}
        </button>
      </div>
    </footer>
  );
}
