"use client";
import { useState, useEffect } from "react";
import {useRouter} from "next/navigation";
import {useDialog} from "@/hooks/useDialog";
import ContentList from "@/components/ContentList/ContentList";


function Page() {
  const router = useRouter();
  const {alert} = useDialog();

  const [data, setData] = useState();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    getData().then((res) => {
      console.log(res.data);
      if(res?.status == 200){
        setData(res.data);
        setVisible(true);
      }else {
        alert(res.message).then(() => router.back());
      }
    });
  }, []);

  return (
    <section className={visible ? "isvisible" : "isinvisible"}>
      <ContentList type="note" data={data}/>
    </section>
  );
}

async function getData() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "note", {cache: 'no-store'});
  return res.json();
}

export default Page;
