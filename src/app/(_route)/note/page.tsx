"use client";
import { useState, useEffect } from "react";
import ContentList from "@/components/ContentList/ContentList";

function Page() {
  const [data, setData] = useState();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    getData().then((res) => {
      setData(res.data);
      setVisible(true);
    });
  }, []);

  return (
    <section className={visible ? "isvisible" : "isinvisible"}>
      <ContentList type="note" data={data} />
    </section>
  );
}

async function getData() {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "note");
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

export default Page;
