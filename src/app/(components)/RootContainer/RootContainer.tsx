import Header from "@/app/(components)/Header/Header";
import styles from "./RootContainer.module.css";
import Nav from "../Nav/Nav";

function RootContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.root_container}>
      <Header />
      <Nav />
      {children}
    </div>
  );
}

export default RootContainer;
