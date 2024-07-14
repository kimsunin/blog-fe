"use client"
import Link from "next/link";
import styles from "./RouteEdit.module.css"

type PropsType = {
  href:string
}

function RouteEdit({href}:PropsType){


  return<div className={styles.route_edit}>
    <Link href={href}>cd edit</Link>
  </div>
}

export default RouteEdit;