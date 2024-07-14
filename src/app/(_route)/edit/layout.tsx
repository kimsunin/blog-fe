import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MD | edit",
  description: "글을 작성하고 수정하는 공간",
};

export default function EditLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
