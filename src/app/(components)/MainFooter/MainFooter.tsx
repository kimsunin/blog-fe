"use client";
import Link from "next/link";
import CustomLink from "@/common/components/CustomLink/CustomLink";
import { useTheme } from "next-themes";
import styles from "./MainFooter.module.css";
import {
  DarkGithubIc,
  DarkNotionIc,
  LightGithubIc,
  LightNotionIc,
} from "svg/index";

function MainFooter() {
  const { theme } = useTheme();
  return (
    <div className={styles.main_footer}>
      <p>
        <CustomLink href="https://plus.cnu.ac.kr/html/kr/" label="충남대학교" />
        에 재학중인 평범한 학생입니다.
      </p>
      <div>
        <Link href="https://github.com/kimsunin">
          {theme == "light" ? <LightGithubIc /> : <DarkGithubIc />}
        </Link>
        <Link href="https://www.notion.so/suninkim/kimsunin-947b333fef434eef9c0d5c935dfc30d0?pm=c">
          {theme == "light" ? <LightNotionIc /> : <DarkNotionIc />}
        </Link>
      </div>
    </div>
  );
}

export default MainFooter;
