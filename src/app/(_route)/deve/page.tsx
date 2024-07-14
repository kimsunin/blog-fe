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

      <ContentList type="deve" data={data} />
    </section>
  );
}

const getData = async () => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "deve");
    const data = res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export default Page;
