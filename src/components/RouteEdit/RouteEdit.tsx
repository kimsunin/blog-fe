"use client"
import {useRouter} from "next/navigation";
import styles from "./RouteEdit.module.css"

type PropsType = {
  href:string
}

function RouteEdit({href}:PropsType){
  const router = useRouter()

  const route = () => {
    router.push(href)
  };

  return<div className={styles.route_edit}>
    <button onClick={route}>cd edit</button>
  </div>
}

export default RouteEdit;