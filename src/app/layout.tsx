import type { Metadata } from "next";
import React from "react";
import {Inter, Noto_Sans} from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/layouts/ThemeProvider/ThemeProvider";
import RootContainer from "@/layouts/RootContainer/RootContainer";
import BlurLayer from "@/layouts/BlurLayer/BlurLayer";
import SoundProvider from "@/layouts/SoundProvider/SoundProvider";
import DialogProvider from "@/layouts/DialogProvider/DialogProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
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
