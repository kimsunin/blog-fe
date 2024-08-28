"use client"
import {useEffect, useState} from "react";
import {useDialog} from "@/hooks/useDialog";
import {useRouter} from "next/navigation";
import ContentList from "@/components/ContentList/ContentList";

function Page({params}: {params: {id: string}}) {
  const router = useRouter();
  const {alert} = useDialog()

  const [data, setData] = useState<any>();
  const [visible, setVisible] = useState(false);


  const list = data?.map((item: any, index:any) => (
    <div key={index}>
      <hr className="my-[20px]"/>
      <h1>{item?.type}</h1>
      {item.data.length > 0 ? <ContentList type={item.type} data={item.data}/> : <p className="mt-[20px]">데이터가 없습니다</p>}
    </div>
  ));


  useEffect(() => {
    getData(params.id).then((res)=>{
      console.log(res.data)
     if(res.status == 200){
       setData(Object.values(res.data))
       setVisible(true);
     } else {
       alert(res.message).then(() => router.back());
     }
    })
  }, []);


  return <section className={visible ? "isvisible" : "isinvisible"}>
    <h1>{`검색결과 「${decodeURI(params.id)}」`}</h1>
    {list}
  </section>;
}

const getData = async (word:string) => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `search/${word}`, {method: "get", cache: 'no-store'});
  return await res.json()
}

export default Page;
