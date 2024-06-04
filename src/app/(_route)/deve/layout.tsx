import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MD | deve",
};

export default function NoteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main id="main">{children}</main>;
}
