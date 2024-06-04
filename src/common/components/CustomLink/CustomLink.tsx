"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./CustomLink.module.css";
import { LinkIc } from "svg/index";

type PropsType = {
  label: string;
  href: string;
};

function CustomLink({ label, href }: PropsType) {
  const pathName = usePathname();

  return (
    <Link
      className={`${styles.custom_link} ${
        pathName !== "/" && pathName.split("/").slice(0, 2).join("/") == href
          ? "underline"
          : ""
      }`}
      href={href}
    >
      <label>{label}</label>
      <LinkIc />
    </Link>
  );
}

export default CustomLink;
