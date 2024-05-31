"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import styles from "./CustomLink.module.css";
import { DarkLinkIc, LightLinkIc } from "svg/index";

type PropsType = {
  label: string;
  href: string;
};

function CustomLink({ label, href }: PropsType) {
  const { theme } = useTheme();
  return (
    <Link className={styles.custom_link} href={href}>
      <label>{label}</label>
      {theme == "light" ? <LightLinkIc /> : <DarkLinkIc />}
    </Link>
  );
}

export default CustomLink;
