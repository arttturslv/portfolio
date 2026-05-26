/** @format */

"use client";

import { createContext, useContext } from "react";
import i18n, { Locale, supportedLocales } from "../lib/i18n";

const LANGUAGE_STORAGE_KEY = "portfolio-language";
const DEFAULT_LOCALE: Locale = "pt-BR";

export interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

export const LanguageContext = createContext<LanguageContextValue>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
});

export function useLanguage() {
  return useContext(LanguageContext);
}

export function getSavedLocale(): Locale {
  if (typeof window === "undefined") {
    return DEFAULT_LOCALE;
  }

  const saved = window.localStorage.getItem(
    LANGUAGE_STORAGE_KEY,
  ) as Locale | null;
  return saved && supportedLocales.includes(saved) ? saved : DEFAULT_LOCALE;
}

export function persistLocale(locale: Locale) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, locale);
  i18n.changeLanguage(locale);
}

export type { Locale };
