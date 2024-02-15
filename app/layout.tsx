import type { Metadata } from "next";
import { Bitter } from "next/font/google";
import "@/styles/globals.scss";

const bitter = Bitter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Raphael Sella",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={bitter.className}>{children}</body>
    </html>
  );
}
