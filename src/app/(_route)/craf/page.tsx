"use client";
import ContentList from "@/components/ContentList/ContentList";
import { useEffect, useState } from "react";

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
      <ContentList type="craf" data={data}/>
    </section>
  );
}

async function getData() {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "craf");
    const data = res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

export default Page;
