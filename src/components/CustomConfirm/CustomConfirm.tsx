import styles from "./CustomConfirm.module.css"

type PropsType = {
  message: string,
  onClickOk: () => void
  onClickCancel: () => void
}

function CustomConfirm({message, onClickOk, onClickCancel}: PropsType) {
  return <div className={`${styles.custom_confirm} bg-white/60 dark:bg-white/20`}>
    <span>{message}</span>
    <div>
      <button onClick={onClickCancel}>취소</button>
      <button onClick={onClickOk} autoFocus>확인</button>
    </div>
  </div>;
}

export default CustomConfirm;