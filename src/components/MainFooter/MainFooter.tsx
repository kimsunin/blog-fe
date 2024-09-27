"use client";
import Link from "next/link";
import styles from "./MainFooter.module.css";
import {EmailIc, GithubIc, NotionIc, PersonIc} from "svg/index";

function MainFooter() {
  return (
    <div className={styles.main_footer}>
      <p>
        <Link href="https://plus.cnu.ac.kr/html/kr/" target="_blank"><strong>충남대학교</strong></Link>
        에 재학중인 컴퓨터를 좋아하는 학생입니다.
      </p>
      <div>
        <Link href="https://github.com/kimsunin" target="_blank">
          <GithubIc/>
        </Link>
        <Link href="https://www.notion.so/suninkim/kimsunin-947b333fef434eef9c0d5c935dfc30d0?pm=c" target="_blank">
          <NotionIc/>
        </Link>
        <Link href="/about">
          <PersonIc/>
        </Link>
        <Link href="mailto:suninkim10@gmail.com">
          <EmailIc/>
        </Link>
      </div>
    </div>
  );
}

export default MainFooter;
