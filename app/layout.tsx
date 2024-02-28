import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gindev - Cédric Bourquin",
  description: "Mon portfolio de développeur web",
  keywords: ["portfolio", "développeur web", "développeur front-end", "next.js", "tailwindcss"],
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
