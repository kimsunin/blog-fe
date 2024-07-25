"use client"
import styles from "./CustomAlert.module.css"


type PropsType = {
  message: string
  onClickOk: () => void
};

function CustomAlert({message, onClickOk}: PropsType) {

  return <div
    className={`${styles.custom_alert} bg-white/60 dark:bg-white/20`}>
    <span>{message}</span>
    <div>
      <button onClick={onClickOk}>확인</button>
    </div>
  </div>;
}

export default CustomAlert;