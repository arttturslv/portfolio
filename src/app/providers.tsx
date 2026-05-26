/** @format */

// app/providers.tsx

"use client";

import React from "react";
import Script from "next/script";
import { Toaster } from "sonner";

import PageTransition from "../components/pageTransition";

import { ThemeContext } from "./themeContext";
import { LanguageContext, Locale, getSavedLocale } from "./languageContext";

import i18n from "../lib/i18n";

import env from "@/env.client";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  const [isDark, setIsDark] = React.useState(false);
  const [locale, setLocaleState] = React.useState<Locale>("pt-BR");

  // Initial setup
  React.useEffect(() => {
    // Theme
    const savedTheme = localStorage.getItem("theme");
    const darkMode = savedTheme === "dark";

    setIsDark(darkMode);

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Language
    const savedLocale = getSavedLocale();

    setLocaleState(savedLocale);
    i18n.changeLanguage(savedLocale);

    document.documentElement.lang = savedLocale;
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);

    localStorage.setItem("portfolio-language", newLocale);

    i18n.changeLanguage(newLocale);

    document.documentElement.lang = newLocale;
  };

  const changeTheme = () => {
    setIsDark((prev) => {
      const next = !prev;

      localStorage.setItem("theme", next ? "dark" : "light");

      if (next) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      return next;
    });
  };

  return (
    <>
      {/* Prevent theme flicker */}
      <Script
        id="theme-script"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const theme = localStorage.getItem("theme");

              if (theme === "dark") {
                document.documentElement.classList.add("dark");
              }
            })();
          `,
        }}
      />

      {/* Microsoft Clarity */}
      <Script
        id="microsoft-clarity"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){
                (c[a].q=c[a].q||[]).push(arguments)
              };

              t=l.createElement(r);
              t.async=1;
              t.src="https://www.clarity.ms/tag/" + i;

              y=l.getElementsByTagName(r)[0];
              y.parentNode.insertBefore(t,y);

            })(window, document, "clarity", "script", "${env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
          `,
        }}
      />

      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${env.NEXT_PUBLIC_ANALYTICS_ID}`}
        strategy="afterInteractive"
      />

      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', '${env.NEXT_PUBLIC_ANALYTICS_ID}');
          `,
        }}
      />

      <LanguageContext.Provider
        value={{
          locale,
          setLocale,
        }}
      >
        <ThemeContext.Provider
          value={{
            isDark,
            changeTheme,
          }}
        >
          <PageTransition>{children}</PageTransition>

          <Toaster richColors />
        </ThemeContext.Provider>
      </LanguageContext.Provider>
    </>
  );
}
