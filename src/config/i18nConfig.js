import { BR, US } from "country-flag-icons/react/3x2";

const I18N_CONFIG = {
  FALLBACK: "pt-BR",
  STORAGE_KEY: "pfb-lang",
  LANGUAGES: [
    { code: "pt-BR", name: "Português", short: "PT", flag: BR },
    { code: "en", name: "English", short: "EN", flag: US },
  ],
};

export default I18N_CONFIG;
