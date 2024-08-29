import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KIMSI | search",
  description: "검색",
};

export default function SearchLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
};
