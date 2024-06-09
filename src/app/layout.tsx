import type { Metadata } from "next";
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./(components)/ThemeProvider/ThemeProvider";
import RootContainer from "./(components)/RootContainer/RootContainer";
import BlurLayer from "./(components)/BlurLayer/BlurLayer";

const inter = Inter({
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: "Mega Dev",
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
          <BlurLayer />
          <RootContainer>{children}</RootContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}
