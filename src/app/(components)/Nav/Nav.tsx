import CustomLink from "@/common/components/CustomLink/CustomLink";
import styles from "./Nav.module.css";
import navHref from "@/model/navHref";

function Nav() {
  const navList = navHref.map((item, index) => (
    <li key={index}>
      <div>
        <CustomLink label={item.title} href={item.href} />
      </div>
      <span>{item.comment}</span>
    </li>
  ));

  return (
    <nav className={styles.nav}>
      <ul>{navList}</ul>
    </nav>
  );
}

export default Nav;
