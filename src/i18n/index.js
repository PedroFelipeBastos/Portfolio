import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import I18N_CONFIG from "../config/i18nConfig";

import en from "./locales/en/translation.json";
import ptBR from "./locales/pt-BR/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      "pt-BR": { translation: ptBR },
      en: { translation: en },
    },
    supportedLngs: I18N_CONFIG.LANGUAGES.map((l) => l.code),
    fallbackLng: I18N_CONFIG.FALLBACK,
    detection: {
      order: ["querystring", "localStorage", "navigator"],
      lookupQuerystring: "lang",
      lookupLocalStorage: I18N_CONFIG.STORAGE_KEY,
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

function syncDocument() {
  document.documentElement.lang = i18n.resolvedLanguage ?? I18N_CONFIG.FALLBACK;
}
i18n.on("languageChanged", syncDocument);
syncDocument();

export default i18n;
