"use client";
import styles from "./Header.module.css";
import { HomeIc, DarkHomeIc } from "svg/index";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { useTheme } from "next-themes";

function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div>
        <div>
          {theme == "light" ? <HomeIc /> : <DarkHomeIc />}
          <span>Mega Dev</span>
        </div>
        <ThemeSwitch />
      </div>
    </header>
  );
}

export default Header;
