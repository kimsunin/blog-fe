import {ReactNode} from "react";
import styles from "./Overlay.module.css"

type PropsType = {
  children: ReactNode;
}

function Overlay({children}: PropsType) {
  return <div className={`${styles.overlay} bg-black/80`}>{children}</div>;
}

export default Overlay;