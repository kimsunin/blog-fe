import ReactMarkdown from "react-markdown";
// 플로그인
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
// 스타일
import styles from "./MarkDownView.module.css";

type PropsType = {
  post: string | undefined;
};

function MarkDownView({ post }: PropsType) {
  return (
    <ReactMarkdown
      className={styles.markdownview}
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkGfm]}
    >
      {post}
    </ReactMarkdown>
  );
}

export default MarkDownView;
