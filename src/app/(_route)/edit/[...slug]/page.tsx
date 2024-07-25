"use client"
import {useCallback, useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import MdEditor from "@/components/MdEditor/MdEditor";
import {useHook} from "@/hooks/useHook";
import styles from "./page.module.css";
import {useDialog} from "@/hooks/useDialog";


function Page({params}: { params: { slug: string[] } }) {
  const router = useRouter();
  const change = useHook()
  const {alert, confirm} = useDialog();

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
    if (password == process.env.NEXT_PUBLIC_PASSWORD) {
      confirm("글을 삭제합니다").then(async (res) => {
        if (res) {
          const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `edit/${params.slug[0]}/${params.slug[1]}`, {method: "delete"})
          const data = await res.json();
          if (data.status == 200) {
            alert(data.message).then(() => router.replace(`/${params.slug[0]}`));
          } else {
            alert(data.message);
          }
        }
      })
    } else {
      alert("비밀번호오류")
    }
  };


  const updateItem = async () => {
    if (password == process.env.NEXT_PUBLIC_PASSWORD) {
      confirm("글을 수정합니다").then(async (res) => {
        if (res) {const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `edit/${params.slug[0]}/${params.slug[1]}`, {
          method: "post",
          body: JSON.stringify(editItem)
        })
          const data = await res.json();
          if(data.status == 200) {
            alert(data.message).then(() => router.push(`/${params.slug[0]}/${params.slug[1]}`));
          }else {
            alert(data.message);
          }}
      })
    } else {
      alert("비밀번호오류")
    }
  };

  useEffect(() => {
    getData(params.slug[0], params.slug[1]).then((res) => {
      if (res?.status == 200) {
        setVisible(true);
        setEditItem({title: res.data.title, content: res.data.content});
      } else {
        alert(res.message).then(() => router.back());
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

const getData = async (type: string, id: string) => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `edit/${type}/${id}`, {method: "get"});
    return await res.json()
  }catch (e){
    console.log(e)
  }
};



export default Page;