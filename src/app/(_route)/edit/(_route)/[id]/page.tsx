"use client"
import {useCallback, useState} from "react";
import {useSearchParams} from "next/navigation";
import MdEditor from "@/components/MdEditor/MdEditor";
import {useHook} from "@/hooks/useHook";
import styles from "./page.module.css";


function Page({ params }: { params: { id: string } }){
  const searchParams = useSearchParams();
  const change = useHook()

  const [visible, setVisible] = useState(false);

  const [type, setType] = useState(searchParams.get("type"));
  const [password, setPassword] = useState();
  const [editItem, setEditItem] = useState<{
    type: string;
    title: string;
    content: string | undefined;
  }>({
    type: "",
    title: "",
    content: "",
  });

  const itemChange = (e: any) => {
    change({ changeItem: editItem, setChangeItem: setEditItem, e });
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


  return <section className={`${styles.edit_section} ${visible ? "isvisible" : "isinvisible"}`}>
    <div onChange={itemChange}>
      <span>{type}</span>
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
        <button>삭제</button>
        <button>수정</button>
      </div>
    </div>
  </section>;
}

export default Page;