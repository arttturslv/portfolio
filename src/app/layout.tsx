/** @format */

import type { Metadata } from "next";
import "../index.css";

import { Analytics } from "@vercel/analytics/next";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Artttur",
  description:
    "Desenvolvedor front-end de Belo Horizonte focado em criar experiências digitais modernas, performáticas e interativas.",
  icons: {
    apple: "/apple-touch-icon.png",
    icon: [
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
