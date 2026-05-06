import type { Metadata } from "next";
import { Outfit, Bodoni_Moda } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni-moda",
  style: ["normal", "italic"],
});

import { Providers } from "./providers";
import ScrollToTop from "@/components/layout/ScrollToTop";

export const metadata: Metadata = {
  title: "Elite FinTech Consulting | Premium Wealth Management Advisory",
  description: "High-stakes financial technology solutions and wealth management consulting. Empowering your growth with algorithmic trading, blockchain, and risk management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${bodoniModa.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <Providers>
          {children}
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
