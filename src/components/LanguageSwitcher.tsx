/** @format */

"use client";

import React from "react";
import { useLanguage } from "../app/languageContext";

// const languages = [
//   { key: "pt-BR", label: "PT-BR" },
//   { key: "en", label: "EN" },
// ] as const;

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="">
      {locale === "en" ? (
        <button
          type="button"
          onClick={() => setLocale("pt-BR")}
          className={`w-8 py-1 text-sm rounded transition-all duration-200  text-black  dark:text-white
          `}
        >
          pt-br
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setLocale("en")}
          className={`w-8 py-1 text-sm rounded transition-all duration-200  text-black  dark:text-white
          `}
        >
          en
        </button>
      )}
    </div>
  );
}
