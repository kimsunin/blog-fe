import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KIMSI | deve",
  description: "개발에 관한 것들을 기록하는 공간",
};

export default function NoteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
