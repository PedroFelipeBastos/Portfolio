const WAKATIME_CONFIG = {
  API_PATH: "/api/wakatime",

  DEFAULT_RANGE: "last_7_days",

  RANGES: [
    { value: "last_7_days", label: "7 dias" },
    { value: "last_30_days", label: "30 dias" },
    { value: "last_6_months", label: "6 meses" },
    { value: "last_year", label: "1 ano" },
    { value: "all_time", label: "Desde sempre" },
  ],

  PROFILE_URL: "",

  MAX_LANGUAGES: 10,

  HIDDEN_LANGUAGES: [],

  CODING_NOW: {
    API_PATH: "/api/codando",

    TIMEZONE: "America/Sao_Paulo",

    ACTIVE_MINUTES: 10,

    BREAK_MINUTES: 15,

    REFRESH_SECONDS: 60,

    PUBLIC_PROJECTS: ["*"],

    SHOW_PRIVATE: true,
  },
};

export default WAKATIME_CONFIG;
