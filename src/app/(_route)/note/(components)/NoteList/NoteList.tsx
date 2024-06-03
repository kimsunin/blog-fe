"use client";
import { useState, useEffect } from "react";
import styles from "./NoteList.module.css";
import Link from "next/link";

// main component
function NoteList() {
  const [data, setData] = useState<NoteListType>();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    getData().then((res) => {
      setData(res);
      setVisible(true);
    });
  }, []);

  const contentList = (content: ContentType) => (
    <ul>
      {content.map((item, index) => (
        <li key={index}>
          <Link href={`note/${item.id}`}>{item.title}</Link>
          <span>{item.data}</span>
        </li>
      ))}
    </ul>
  );

  const noteList = data?.map((item, index) => (
    <div key={index}>
      <h1>{item.year}</h1>
      <hr />
      {contentList(item.content)}
    </div>
  ));

  return (
    <article
      className={`${styles.note_list} ${visible ? "isvisible" : "isinvisible"}`}
    >
      {noteList}
    </article>
  );
}

const getData = async () => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "note");
    const data = res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export default NoteList;
