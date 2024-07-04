"use client";
import SoundSwitch from "../SoundSwitch/SoundSwitch";
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
        <div>
          <SoundSwitch />
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}

export default Header;
