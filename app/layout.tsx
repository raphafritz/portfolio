import type { Metadata } from "next";
import { Bitter } from "next/font/google";
import "./globals.scss";

import SmoothScroll from "@/components/SmoothScroll";

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
    <html lang="en">
      <body className={bitter.className}>
        {/* <SmoothScroll /> */}
        {children}
      </body>
    </html>
  );
}
