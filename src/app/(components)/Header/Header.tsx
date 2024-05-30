"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { HomeIc, DarkHomeIc } from "svg/index";

import ThemeSwitch from "@/common/components/ThemeSwitch/ThemeSwitch";
import { useTheme } from "next-themes";

function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header id="header">
      <div className={styles.header_inner}>
        <Link href="/">
          {theme == "light" ? <HomeIc /> : <DarkHomeIc />}
          <span>Mega Dev</span>
        </Link>
        <ThemeSwitch />
      </div>
    </header>
  );
}

export default Header;
