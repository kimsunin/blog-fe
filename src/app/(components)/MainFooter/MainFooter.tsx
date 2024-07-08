"use client";
import Link from "next/link";
import CustomLink from "@/common/components/CustomLink/CustomLink";
import styles from "./MainFooter.module.css";
import { GithubIc, NotionIc } from "svg/index";

function MainFooter() {
  return (
    <div className={styles.main_footer}>
      <p>
        <CustomLink href="https://plus.cnu.ac.kr/html/kr/" label="충남대학교"/>
        에 재학중인 컴퓨터를 좋아하는 학생입니다.
      </p>
      <div>
        <Link href="https://github.com/kimsunin" target="_blank">
          <GithubIc/>
        </Link>
        <Link href="https://www.notion.so/suninkim/kimsunin-947b333fef434eef9c0d5c935dfc30d0?pm=c" target="_blank">
          <NotionIc/>
        </Link>
      </div>
    </div>
  );
}

export default MainFooter;
