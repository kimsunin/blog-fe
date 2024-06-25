"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import styles from "./ThemeSwitch.module.css";
import { LightIc, DarkIco } from "svg/index";
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
      {theme == "light" && <LightIc />}
      {theme == "dark" && <DarkIco />}
    </button>
  );
}

export default ThemeSwitch;
