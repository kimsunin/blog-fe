import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KIMSI | note",
  description: "자유롭게 기록하고 기억하는 공간",
};

export default function NoteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
