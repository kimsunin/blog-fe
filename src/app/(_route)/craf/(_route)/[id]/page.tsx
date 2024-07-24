"use client";
import { useEffect, useState } from "react";
import MarkDownView from "@/components/MarkDownView/MarkDownView";
import RouteEdit from "@/components/RouteEdit/RouteEdit";
import Comment from "@/components/Comment/Comment";

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
        <RouteEdit href={`/edit/craf/${params.id}`}/>
      </article>
      <hr/>
      <Comment/>
    </section>
  );
}

const getData = async (id: string) => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `craf/${id}`);
    const data = res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export default Page;
