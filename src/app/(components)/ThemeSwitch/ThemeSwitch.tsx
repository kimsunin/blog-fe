"use client";
import { useTheme } from "next-themes";
import styles from "./ThemeSwitch.module.css";
import { MoonIc, SunIc } from "svg/index";
import { themeSound } from "sound/index";

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const sound = new Audio(themeSound);

  const switchTheme = () => {
    sound.play();
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
