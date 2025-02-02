"use client";
import {useRouter} from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useHook } from "@/hooks/useHook";
import {useDialog} from "@/hooks/useDialog";
import MdEditor from "@/components/MdEditor/MdEditor";
import styles from "./page.module.css";


function Page() {
  const router = useRouter();
  const change = useHook();
  const {alert, confirm} = useDialog();

  const [visible, setVisible] = useState(false);

  const [password, setPassword] = useState();

  const [editItem, setEditItem] = useState<{
    type: string;
    title: string;
    content: string | undefined;
  }>({
    type: localStorage.getItem("type") || "note",
    title: localStorage.getItem("title") || "",
    content: localStorage.getItem("content") || "",
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

  useEffect(() => {
    localStorage.setItem("type", editItem.type);
    if (editItem.title || editItem.title == "") {
      localStorage.setItem("title", editItem.title);
    }
    if (editItem.content || editItem.content == "") {
      localStorage.setItem("content", editItem.content);
    }
    setVisible(true);
  }, [editItem]);

  const onSubmit = async() => {
    if (password == process.env.NEXT_PUBLIC_PASSWORD) {
      confirm("글을 생성합니다").then(async (res) => {
        if (res) {
          const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "edit", {
            method: "post",
            body: JSON.stringify(editItem),
            cache: 'no-store',
          });
          const data = await res.json();
          if (data.status == 200) {
            alert(data.message).then(() => {
              localStorage.removeItem("type")
              localStorage.removeItem("title")
              localStorage.removeItem("content")
              router.push(`/${editItem.type}/${data.data[0].id}`);
            });
          } else {
            alert(data.message);
          }
        }
      });
    } else {
      alert("비밀번호오류");
    }
  };

  return (
    <section className={`${styles.edit_section} ${visible ? "isvisible" : "isinvisible"}`}>
      <h1>글작성</h1>
      <hr/>
      <div onChange={itemChange}>
        <select name="type" defaultValue={editItem.type}>
          <option value="note">note</option>
          <option value="craf">craf</option>
          <option value="deve">deve</option>
        </select>
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
        <button onClick={onSubmit}>작성</button>
      </div>
    </section>
  );
}

export default Page;
