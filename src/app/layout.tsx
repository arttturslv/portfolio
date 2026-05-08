/** @format */
"use client";

import React from "react";
import PageTransition from "../components/pageTransition";
import "../index.css";
import Head from "next/head";
import { ThemeContext } from "./themeContext";
import Script from "next/script";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const theme = localStorage.getItem("theme");
    setIsDark(theme === "dark" ? true : false);
  }, []);

  const changeTheme = () => {
    setIsDark((prev) => {
      if (prev === true) {
        localStorage.setItem("theme", "light");
        return false;
      } else {
        localStorage.setItem("theme", "dark");
        return true;
      }
    });
  };

  return (
    <html lang="pt">
      <Head>
        <title>Artttur</title>
        <meta
          name="description"
          content="Developer based in Belo Horizonte specializing in web development, front-end technologies, and creating interactive digital experiences. Passionate about technology, art, and innovative projects."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
            `,
          }}
        />

        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
        ></Script>
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', "${process.env.NEXT_PUBLIC_ANALYTICS_ID}");
            `,
          }}
        />
      </Head>
      <body>
        <div id="root">
          <ThemeContext.Provider value={{ isDark, changeTheme }}>
            <PageTransition>{children}</PageTransition>
            <Toaster richColors />
          </ThemeContext.Provider>
        </div>
      </body>
    </html>
  );
}
