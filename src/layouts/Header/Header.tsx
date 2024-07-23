"use client";
import SoundSwitch from "@/components/SoundSwitch/SoundSwitch";
import ThemeSwitch from "@/components/ThemeSwitch/ThemeSwitch";
import styles from "./Header.module.css";
import { HomeIc } from "svg/index";

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <div>
          <HomeIc />
          <span>KIMSI</span>
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
