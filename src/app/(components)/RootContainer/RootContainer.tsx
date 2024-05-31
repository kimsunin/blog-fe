import Header from "@/app/(components)/Header/Header";
import styles from "./RootContainer.module.css";
import Footer from "@/app/(components)/Footer/Footer";
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
      <Footer />
    </div>
  );
}

export default RootContainer;
