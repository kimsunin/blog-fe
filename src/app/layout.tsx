import type { Metadata } from "next";
import React from "react";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "@/layouts/ThemeProvider/ThemeProvider";
import RootContainer from "@/layouts/RootContainer/RootContainer";
import BlurLayer from "@/layouts/BlurLayer/BlurLayer";
import SoundProvider from "@/layouts/SoundProvider/SoundProvider";
import DialogProvider from "@/layouts/DialogProvider/DialogProvider";

const pretendard = localFont({
  src: "../../public/font/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
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
    icon: [
      {
        rel: 'icon',
        url: "/svg/favicon-black.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        rel: 'icon',
        url: "/svg/favicon-white.svg",
        media: "(prefers-color-scheme: dark)",
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" className={`${pretendard.variable}`}>
    <body className={pretendard.className}>
    <ThemeProvider>
      <SoundProvider>
        <DialogProvider>
          <BlurLayer/>
          <RootContainer>{children}</RootContainer>
        </DialogProvider>
      </SoundProvider>
    </ThemeProvider>
    </body>
    </html>
  );
}
