"use client";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import styles from "./Header.module.css";
import { HomeIc } from "svg/index";

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <div>
          <HomeIc />
          <span>Mega Dev</span>
        </div>
        <ThemeSwitch />
      </div>
    </header>
  );
}

export default Header;
