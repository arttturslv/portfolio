/** @format */
import "../index.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artttur",
  description:
    "Developer based in Belo Horizonte specializing in web development, front-end technologies, and creating interactive digital experiences. Passionate about technology, art, and innovative projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
