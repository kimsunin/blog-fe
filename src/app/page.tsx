"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import MainFooter from "./(components)/MainFooter/MainFooter";

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <main id="main">
      <section className={visible ? "isvisible" : "isinvisible"}>
        <article>
          <p>김선인의 개발공간</p>
          <p>
            단순히 만드는 것에 그치지 않으며
            <Link href="/edit">
              <b>기록</b>
            </Link>
            하고<b> 기억</b>하고자 합니다.
          </p>
        </article>
        <MainFooter />
      </section>
    </main>
  );
}
