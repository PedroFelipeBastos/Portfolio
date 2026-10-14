import { useCallback } from "react";
import { useTranslation } from "react-i18next";

export function useLang() {
  const { i18n } = useTranslation();
  return i18n.resolvedLanguage?.startsWith("en") ? "en" : "pt";
}

export function useLocale() {
  return useLang() === "en" ? "en-US" : "pt-BR";
}

export function useLocalized() {
  const lang = useLang();
  return useCallback(
    (value) =>
      value && typeof value === "object" && !Array.isArray(value) && "pt" in value
        ? value[lang] ?? value.pt
        : value,
    [lang]
  );
}

export function formatMonth(value, locale) {
  if (!value) return "";
  const [year, month] = value.split("-").map(Number);
  if (!month) return String(year);
  const name = new Intl.DateTimeFormat(locale, { month: "short" })
    .format(new Date(year, month - 1, 15))
    .replace(".", "");
  return `${name} ${year}`.toUpperCase();
}
