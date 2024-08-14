"use client";
import {useState} from "react";
import styles from "./CustomPrompt.module.css"

type PropsType = {
  message: string;
  onClickOk: (input: string) => void
  onClickCancel: () => void
};

function CustomPrompt({message, onClickOk, onClickCancel}: PropsType) {
  const [value, setValue] = useState("");

  return <div className={`${styles.custom_prompt} bg-white/60 dark:bg-white/20`}>
    <span>{message}</span>
    <input className="bg-white/60 dark:bg-white/20" value={value} type="password"
           onChange={(e) => setValue(e.target.value)}/>
    <div>
      <button onClick={onClickCancel}>취소</button>
      <button onClick={() => onClickOk(value)}>확인</button>
    </div>
  </div>;
}

export default CustomPrompt;

