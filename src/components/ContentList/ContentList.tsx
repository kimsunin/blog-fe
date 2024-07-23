import styles from "./ContentList.module.css";
import Link from "next/link";
import CustomImage from "@/components/CustomImage/CustomImage";

type PropsType = {
  type: string;
  data: ContentListType | undefined;
};

function ContentList({ type, data }: PropsType) {
  const subContentList = (content: SubContentType) => (
    content.map((item, index) => (
      <li key={index} className={styles.content_item}>
        <Link href={`/${type}/${item.id}`} className="border border-black/5 dark:border-white/10">
          <CustomImage src={null}/>
          <div>
            <h1>{item.title}</h1>
            <span>{item.date}</span>
          </div>
        </Link>
      </li>
    ))
  );

  const contentList = data?.map((item, index) => (
    <div key={index}>
      <span>{item.year}</span>
      <hr/>
      <ul>
        {subContentList(item.content)}
      </ul>
    </div>
  ));

  return <article className={styles.content_list}>{contentList}</article>;
}

export default ContentList;
