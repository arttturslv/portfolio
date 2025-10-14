/** @format */
"use client";

import React from "react";
import PageTransition from "../components/pageTransition";
import "../index.css";
import Head from "next/head";
import { ThemeContext } from "./themeContext";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDark, setIsDark] = React.useState(false);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <html lang="pt">
      <Head>
        <title>Artttur</title>
        <meta
          name="description"
          content="Developer based in Belo Horizonte specializing in web development, front-end technologies, and creating interactive digital experiences. Passionate about technology, art, and innovative projects."
        />
        <Script type="text/javascript">
          {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");`}
        </Script>

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6KET45W263"
        ></Script>
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6KET45W263');
            `,
          }}
        />
      </Head>
      <body>
        <div id="root">
          <ThemeContext.Provider value={{ isDark, changeTheme }}>
            <PageTransition>{children}</PageTransition>
          </ThemeContext.Provider>
        </div>
      </body>
    </html>
  );
}
