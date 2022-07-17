import styles from "./Header.module.css";
import ignite_logo from "../../assets/ignite_logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={ignite_logo} alt="Logo do Ignite" />
      <h1>Ignite Feed</h1>
    </header>
  );
}
