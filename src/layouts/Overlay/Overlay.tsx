"use client"
import {useEffect} from "react";
import {ReactNode} from "react";
import styles from "./Overlay.module.css"

type PropsType = {
  children: ReactNode;
}

function Overlay({children}: PropsType) {


  useEffect(() => {
    const $body = document.querySelector("body");
    if ($body) {
      const overflow = $body.style.overflow;
      $body.style.overflow = "hidden";
      return () => {
        $body.style.overflow = overflow
      };
    }
  }, []);

  return <div className={`${styles.overlay} bg-black/80`}>{children}</div>;
}

export default Overlay;
