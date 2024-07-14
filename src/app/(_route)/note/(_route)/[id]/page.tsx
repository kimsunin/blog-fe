"use client";
import { useEffect, useState } from "react";
import MarkDownView from "@/components/MarkDownView/MarkDownView";
import RouteEdit from "@/components/RouteEdit/RouteEdit";

function Page({ params }: { params: { id: string } }) {
  const [data, setData] = useState();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    getData(params.id).then((res) => {
      setData(res.data);
      setVisible(true);
    });
  }, [params.id]);

  return (
    <section className={visible ? "isvisible" : "isinvisible"}>
      <article>
        <MarkDownView post={data}/>
      </article>
      <RouteEdit href={`/edit/note/${params.id}`}/>
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
