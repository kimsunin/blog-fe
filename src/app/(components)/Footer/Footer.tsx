"use client";
import CustomLink from "@/common/components/CustomLink/CustomLink";
import styles from "./Footer.module.css";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  DarkGithubIc,
  DarkNotionIc,
  LightGithubIc,
  LightNotionIc,
} from "svg/index";

function Footer() {
  const { theme } = useTheme();
  return (
    <footer className={styles.footer}>
      <p>
        <CustomLink href="https://plus.cnu.ac.kr/html/kr/" label="충남대학교" />
        에 재학중인 평범한 학생입니다.
      </p>
      <div>
        <Link href="https://github.com/kimsunin">
          {theme == "light" ? <LightGithubIc /> : <DarkGithubIc />}
        </Link>
        <Link href="https://www.notion.so/suninkim">
          {theme == "light" ? <LightNotionIc /> : <DarkNotionIc />}
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
