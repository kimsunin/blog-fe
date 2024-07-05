"use client";
import { useCallback, useEffect, useState } from "react";
import MdEditor from "./(components)/MdEditor/MdEditor";
import { useHook } from "@/hooks/useHook";
import styles from "./page.module.css";

function Page() {
  const change = useHook();

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
      setEditItem({ ...editItem, content: value });
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
    console.log(editItem);
    setVisible(true);
  }, [editItem]);

  const onSubmit = () => {
    if (password == process.env.NEXT_PUBLIC_PASSWORD) {
      alert("작성완료");
    } else {
      alert("비밀번호가 다릅니다");
    }
  };

  return (
    <section className={`${styles.edit_section} ${visible ? "isvisible" : "isinvisible"}`}>
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
