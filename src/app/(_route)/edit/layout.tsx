import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MD | edit",
};

export default function EditLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
