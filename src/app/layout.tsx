import type { Metadata } from "next";
import { Fraunces, Atkinson_Hyperlegible, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Atkinson_Hyperlegible({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "700"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "DevInsights — Research, RMEL & Data Analytics",
    template: "%s — DevInsights",
  },
  description:
    "Social research, impact assessment & evaluation, and data analytics — illuminating impact with rigorous evidence.",
  metadataBase: new URL("https://www.devinsights.co.in"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
