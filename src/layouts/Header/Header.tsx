"use client";
import {useState} from "react";
import {useRouter} from "next/navigation";
import SoundSwitch from "@/components/SoundSwitch/SoundSwitch";
import ThemeSwitch from "@/components/ThemeSwitch/ThemeSwitch";
import styles from "./Header.module.css";
import {RocketIc, SearchIc} from "svg/index";
3


function Header() {
  const router = useRouter()

  const [onClick, setOnClick] = useState(false)
  const [value, setValue] = useState("");

  const onSubmit = (e:any) => {
    e.preventDefault();
    if(value !== "") {
      router.push(`/search/${value}`)
    }
  }


  return (
    <header className={styles.header}>
      <div>
        <div>
          <RocketIc/>
          <h1>KIMSI.ME</h1>
        </div>
        <div>
          <button onClick={() => setOnClick(!onClick)}><SearchIc/></button>
          <SoundSwitch/>
          <ThemeSwitch/>
        </div>
      </div>
      <form onSubmit={(e) => onSubmit(e)}
            className={`${onClick ? styles.search_on : styles.search_off} border-black/5 dark:border-white/10`}>
        <input placeholder="검색어를 입력하세요" value={value} onChange={(e) => setValue(e.target.value)}/>
      </form>
    </header>
  );
}

export default Header;
