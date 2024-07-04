"use client";
import { useTheme } from "next-themes";
import styles from "./ThemeSwitch.module.css";
import { MoonIc, SunIc } from "svg/index";
import { themeSound } from "sound/index";
import { useSound } from "../SoundSwitch/SoundSwitch";

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const { sound, setSound } = useSound();
  const soundObj = new Audio(themeSound);

  const switchTheme = () => {
    if (sound) {
      soundObj.play();
    }
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <button onClick={() => switchTheme()} className={styles.theme_switch}>
      {theme == "light" && <MoonIc />}
      {theme == "dark" && <SunIc />}
    </button>
  );
}

export default ThemeSwitch;
