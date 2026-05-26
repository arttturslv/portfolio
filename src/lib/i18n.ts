/** @format */

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ptBR from "../locales/pt-BR/common.json";
import en from "../locales/en/common.json";

export const supportedLocales = ["pt-BR", "en"] as const;
export type Locale = (typeof supportedLocales)[number];

export const resources = {
  "pt-BR": {
    common: ptBR,
  },
  en: {
    common: en,
  },
} as const;

export type Namespace = keyof (typeof resources)["pt-BR"];
export type TranslationKey = keyof (typeof resources)["pt-BR"]["common"];

declare module "react-i18next" {
  interface CustomTypeOptions {
    resources: typeof resources;
    defaultNS: "common";
    returnNull: false;
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: "pt-BR",
  fallbackLng: "pt-BR",
  supportedLngs: ["pt-BR", "en"],
  ns: ["common"],
  defaultNS: "common",
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

export default i18n;
