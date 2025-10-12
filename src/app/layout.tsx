/** @format */
"use client";

import React from "react";
import PageTransition from "../components/pageTransition";
import "../index.css";
import Head from "next/head";
import { ThemeContext } from "./themeContext";

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
