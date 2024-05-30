import Header from "@/app/(components)/Header/Header";
import styles from "./RootContainer.module.css";

function RootContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.root_container}>
      <Header />
      {children}
    </div>
  );
}

export default RootContainer;
