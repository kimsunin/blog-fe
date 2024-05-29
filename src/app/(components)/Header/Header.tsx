"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { HomeIc, LigthIc } from "svg/index";

function Header() {
  const [isClick, setIsClick] = useState(false);

  return (
    <header id="header">
      <div className={styles.header_inner}>
        <Link href="/">
          <HomeIc />
          <span>Mega Dev</span>
        </Link>
        <button>
          <LigthIc />
        </button>
      </div>
    </header>
  );
}

export default Header;
