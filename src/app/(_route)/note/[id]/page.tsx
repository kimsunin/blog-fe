"use client";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {useDialog} from "@/hooks/useDialog";
import MarkDownView from "@/components/MarkDownView/MarkDownView";
import RouteEdit from "@/components/RouteEdit/RouteEdit";
import Comment from "@/components/Comment/Comment";

function Page({ params }: { params: { id: string } }) {
  const router = useRouter();
  const {alert} = useDialog();


  const [data, setData] = useState();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    getData(params.id).then((res) => {
      if (res?.status == 200) {
        setData(res.data);
        setVisible(true);
      } else {
        alert(res.message).then(() => router.back());
      }
    });
  }, []);

  return (
    <section className={visible ? "isvisible" : "isinvisible"}>
      <article>
        <MarkDownView post={data}/>
        <RouteEdit href={`/edit/note/${params.id}`}/>
      </article>
      <hr/>
      <Comment/>
    </section>
  );
}

const getData = async (id: string) => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `note/${id}`);
    return await res.json()
  } catch (e) {
    console.log(e);
  }
};

export default Page;
