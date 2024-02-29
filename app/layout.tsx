import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ginxdev - Cédric Bourquin",
  description: "Mon portfolio de développeur web",
  keywords: [
    "portfolio",
    "développeur web",
    "développeur front-end",
    "next.js",
    "tailwindcss",
  ],
  openGraph: {
    title: "Ginxdev - Portfolio de Cédric Bourquin",
    description: "Développeur web, portfolio de Cédric Bourquin",
    url: "https://ginxdev.vercel.app/",
    siteName: "Ginxdev - Portfolio de Cédric Bourquin",
    images: [
      {
        url: "https://ginxdev.vercel.app/sitecover.webp",
        width: 432,
        height: 700,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`bg-peach-600 ${lexend.className}`}>{children}</body>
    </html>
  );
}
