import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MD | craf",
};

export default function CrafLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
