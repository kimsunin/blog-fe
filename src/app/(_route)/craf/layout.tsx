import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MD | deve",
};

export default function CrafLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
