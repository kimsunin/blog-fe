import Header from "@/layouts/Header/Header";
import styles from "./RootContainer.module.css";
import Nav from "@/layouts/Nav/Nav";
import Link from "next/link";
import CustomLink from "@/components/CustomLink/CustomLink";

function RootContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.root_container}>
      <CustomLink href={"https://kimsi.me"} label="블로그가 이전되었습니다" />
      <Header />
      <Nav />
      {children}
    </div>
  );
}

export default RootContainer;
