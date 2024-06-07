import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MD | note",
};

export default function NoteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
