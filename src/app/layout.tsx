import type { Metadata } from "next";
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/layouts/ThemeProvider/ThemeProvider";
import RootContainer from "@/layouts/RootContainer/RootContainer";
import BlurLayer from "@/layouts/BlurLayer/BlurLayer";
import SoundProvider from "@/layouts/SoundProvider/SoundProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: "KIMSI",
  verification: {
    other: {
      "naver-site-verification": "38021cb91c682e676858de5bf424d521bf8514cf",
    },
  },
  description: "develope space of kimsunin",
  icons: {
    icon: "/svg/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <SoundProvider>
            <BlurLayer />
            <RootContainer>{children}</RootContainer>
          </SoundProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
