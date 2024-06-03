import ReactMarkdown from "react-markdown";
import styles from "./MarkDownView.module.css";

type PropsType = {
  post: string | undefined;
};

function MarkDownView({ post }: PropsType) {
  return <ReactMarkdown className={styles.markdownview}>{post}</ReactMarkdown>;
}

export default MarkDownView;
