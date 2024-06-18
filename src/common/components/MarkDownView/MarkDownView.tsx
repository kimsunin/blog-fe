import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import styles from "./MarkDownView.module.css";

type PropsType = {
  post: string | undefined;
};

function MarkDownView({ post }: PropsType) {
  return (
    <ReactMarkdown className={styles.markdownview} rehypePlugins={[rehypeRaw]}>
      {post}
    </ReactMarkdown>
  );
}

export default MarkDownView;
