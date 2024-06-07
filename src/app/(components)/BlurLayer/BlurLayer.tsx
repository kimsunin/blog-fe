import styles from "./BlurLayer.module.css";

function BlurLayer() {
  return <div className={styles.blur_layer} aria-hidden={true}></div>;
}

export default BlurLayer;
