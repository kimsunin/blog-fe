import type { Metadata } from "next";
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./(components)/ThemeProvider/ThemeProvider";
import RootContainer from "./(components)/RootContainer/RootContainer";
import BlurLayer from "./(components)/BlurLayer/BlurLayer";
import SoundProvider from "./(components)/SoundProvider/SoundProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: "Mega Dev",
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
