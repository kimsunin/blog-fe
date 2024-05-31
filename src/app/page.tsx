import styles from "./page.module.css";

export default function Home() {
  return (
    <main id="main">
      <section className={styles.home_section}>
        <article>
          <h1>비전공자로 시작하여 풀스택 개발자가 되기까지</h1>
          <p>
            컴퓨터를 좋아 시작한 프로젝트, 단순히 만드는 것에 그치지 않으며
            <b>기록</b>하고 <b>기억</b>하고자 합니다.
          </p>
        </article>
      </section>
    </main>
  );
}
