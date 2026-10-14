import { useTranslation } from "react-i18next";
import I18N_CONFIG from "../../config/i18nConfig";
import "./LanguageSwitcher.css";

export default function LanguageSwitcher({ showLabels = true }) {
  const { t, i18n } = useTranslation();
  const current = i18n.resolvedLanguage;

  return (
    <div className="lang-switcher" role="group" aria-label={t("switcher.label")}>
      {I18N_CONFIG.LANGUAGES.map(({ code, name, short, flag: Flag }) => {
        const active = code === current;
        return (
          <button
            key={code}
            type="button"
            lang={code}
            className={`lang-btn ${active ? "active" : ""}`}
            aria-pressed={active}
            title={active ? name : t("switcher.changeTo", { language: name })}
            onClick={() => i18n.changeLanguage(code)}
          >
            <Flag className="lang-flag" aria-hidden="true" />
            {showLabels && <span>{short}</span>}
          </button>
        );
      })}
    </div>
  );
}
