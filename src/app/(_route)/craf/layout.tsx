import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KIMSI | craf",
  description: "직접 만들고 보여주는 공간",
};

export default function CrafLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
