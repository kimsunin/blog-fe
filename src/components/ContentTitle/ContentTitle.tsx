import styles from "./ContentTitle.module.css"
import {CalendarIc} from "svg/index";

type PropsType = {
  title: string | undefined,
  date: string | undefined,
};

function ContentTitle({title, date}: PropsType) {
  return <div className={styles.content_title}>
    <h1>{title}</h1>
    <div>
      <CalendarIc/>
      <span>{date}</span>
    </div>
    <hr/>
  </div>;
}

export default ContentTitle;