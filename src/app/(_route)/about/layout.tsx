import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KIMSI | about",
  description: "김선인 소개",
};

export default function AboutLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
