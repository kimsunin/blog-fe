"use client";
import {useState} from "react";
import {useRouter} from "next/navigation";
import SoundSwitch from "@/components/SoundSwitch/SoundSwitch";
import ThemeSwitch from "@/components/ThemeSwitch/ThemeSwitch";
import styles from "./Header.module.css";
import {HomeIc, SearchIc} from "svg/index";



function Header() {
  const router = useRouter()

  const [onClick, setOnClick] = useState(false)
  const [value, setValue] = useState("");

  const onSubmit = (e:any) => {
    e.preventDefault();
    router.push(`/search/${value}`)
  }

  return (
    <header className={styles.header}>
      <div>
        <div>
          <HomeIc/>
          <span>KIMSI</span>
        </div>
        <div>
          <button onClick={()=>setOnClick(!onClick)}><SearchIc/></button>
          <SoundSwitch/>
          <ThemeSwitch/>
        </div>
      </div>
      <form onSubmit={(e)=>onSubmit(e)} className={`${onClick ? styles.search_on : styles.search_off} dark:border-white/10`}>
        <input placeholder="검색어를 입력하세요" value={value} onChange={(e)=>setValue(e.target.value)}/>
      </form>
    </header>
  );
}

export default Header;
