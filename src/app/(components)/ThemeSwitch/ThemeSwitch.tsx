"use client";
import {useTheme} from "next-themes";
import {useSound} from "@/hooks/useSound";
import styles from "./ThemeSwitch.module.css";
import {MoonIc, SunIc} from "svg/index";
import {themeSound} from "sound/index";

function ThemeSwitch() {
  const {setTheme, systemTheme, resolvedTheme} = useTheme();
  const {sound, setSound} = useSound();
  const soundObj = new Audio(themeSound);


  const switchTheme = () => {
    if (sound) {
      soundObj.play();
    }
    if (resolvedTheme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <button onClick={() => switchTheme()} className={styles.theme_switch}>
      {resolvedTheme == "light" && <SunIc/>}
      {resolvedTheme == "dark" && <MoonIc/>}
    </button>
  );
}

export default ThemeSwitch;
