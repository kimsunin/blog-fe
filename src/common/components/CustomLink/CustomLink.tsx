"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import styles from "./CustomLink.module.css";
import { DarkLinkIc, LightLinkIc } from "svg/index";

type PropsType = {
  label: string;
  href: string;
};

function CustomLink({ label, href }: PropsType) {
  const { theme } = useTheme();
  const pathName = usePathname();

  return (
    <Link
      className={`${styles.custom_link} ${
        pathName !== "/" && pathName.split("/").slice(0, 2).join("/") == href
          ? "located"
          : ""
      }`}
      href={href}
    >
      <label>{label}</label>
      {theme == "light" ? <LightLinkIc /> : <DarkLinkIc />}
    </Link>
  );
}

export default CustomLink;
