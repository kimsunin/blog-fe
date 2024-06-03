"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import MarkDownView from "@/common/components/MarkDownView/MarkDownView";

function Page({ params }: { params: { id: string } }) {
  const [data, setData] = useState();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    getData(params.id).then((res) => {
      setData(res);
      setVisible(true);
    });
  }, []);

  return (
    <section>
      <article
        className={`${styles.note_list} ${
          visible ? "isvisible" : "isinvisible"
        }`}
      >
        <MarkDownView post={data} />
      </article>
    </section>
  );
}

const getData = async (id: string) => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `note/${id}`);
    const data = res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export default Page;
