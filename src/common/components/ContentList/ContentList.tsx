import styles from "./ContentList.module.css";
import Link from "next/link";

type PropsType = {
  type: string;
  data: ContentListType | undefined;
};

function ContentList({ type, data }: PropsType) {
  const subContentList = (content: SubContentType) => (
    <ul>
      {content.map((item, index) => (
        <li key={index}>
          <Link href={`/${type}/${item.id}`}>{item.title}</Link>
          <span>{item.date}</span>
        </li>
      ))}
    </ul>
  );

  const contentList = data?.map((item, index) => (
    <div key={index}>
      <span>{item.year}</span>
      <hr />
      {subContentList(item.content)}
    </div>
  ));

  return <article className={styles.content_list}>{contentList}</article>;
}

export default ContentList;
