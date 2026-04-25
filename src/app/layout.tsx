import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";

const headingFont = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["700"],
});

const bodyFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Agencia JN | Presenca Digital com Performance",
  description:
    "Agencia especializada em criacao de sites, SEO, redes sociais e design grafico para crescimento de negocios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
