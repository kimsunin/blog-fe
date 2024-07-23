"use client"
import {useCallback, useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import MdEditor from "@/components/MdEditor/MdEditor";
import {useHook} from "@/hooks/useHook";
import styles from "./page.module.css";


function Page({params}: { params: { slug: string[] } }) {

  const router = useRouter();
  const change = useHook()


  const [visible, setVisible] = useState(false);

  const [password, setPassword] = useState();
  const [editItem, setEditItem] = useState<{
    title: string;
    content: string | undefined;
  }>({
    title: "",
    content: "",
  });

  const itemChange = (e: any) => {
    change({changeItem: editItem, setChangeItem: setEditItem, e});
  };
  const passwordChange = (e: any) => {
    setPassword(e.target.value);

  };
  const contentChange = useCallback(
    (value: string | undefined) => {
      setEditItem({...editItem, content: value});
    },
    [editItem]
  );

  const deleteItem = async () => {
    if(password == process.env.NEXT_PUBLIC_PASSWORD) {
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL+ `edit/${params.slug[0]}/${params.slug[1]}`, {method: "delete"}).then((res)=>{
        alert("삭제완료");
        router.replace(`/${params.slug[0]}`);
      })
    } else{
      alert("비밀번호오류")
    }
  };


  const updateItem = async () => {

    if (password == process.env.NEXT_PUBLIC_PASSWORD) {
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `edit/${params.slug[0]}/${params.slug[1]}`, {method: "post", body:JSON.stringify(editItem)}).then((res)=>{
        alert("수정완료");
        router.push(`/${params.slug[0]}/${params.slug[1]}`);
      });
    } else{
      alert("비밀번호오류")
    }
  };

  useEffect(() => {
    const res = getData(params.slug[0], params.slug[1]).then((res)=>{
      if(res.status == 200) {
        setVisible(true)
        setEditItem({title: res.data.title, content: res.data.content});
      } else {
        alert("type, id 오류")
        router.back();
      }
    });
  }, []);


  return <section className={`${styles.edit_section} ${visible ? "isvisible" : "isinvisible"}`}>
    <h1>글수정</h1>
    <hr/>
    <div onChange={itemChange}>
      <span>{params.slug[0]}</span>
      <input defaultValue={editItem.title} name="title" placeholder="제목"/>
    </div>
    <MdEditor value={editItem.content} onChange={contentChange}/>
    <div>
      <input
        type="password"
        name="password"
        placeholder="비밀번호"
        onChange={passwordChange}
      />
      <div>
        <button onClick={deleteItem}>삭제</button>
        <button onClick={updateItem}>수정</button>
      </div>
    </div>
  </section>;
}

const getData = async (type:string, id:string) => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `edit/${type}/${id}`);
  const data = await res.json();
  return data;
}



export default Page;