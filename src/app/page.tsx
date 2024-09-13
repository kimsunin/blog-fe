"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import MainFooter from "@/components/MainFooter/MainFooter";

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <main id="main">
      <section className={visible ? "isvisible" : "isinvisible"}>
        <article>
          <p><strong>김선인</strong>의 개발공간</p>
          <p>
            {"단순히 만드는 것에 그치지 않으며\n"}
            <strong>기록</strong>{"하고\n"}<strong>기억</strong>하고자 합니다.
          </p>
        </article>
        <MainFooter/>
      </section>
    </main>
  );
}
