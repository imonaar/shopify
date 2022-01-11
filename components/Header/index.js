
import styles from "./Header.module.scss";
import Datepicker from "../Datepicker";

export default function Header() {
  return (
    <div className={styles.header}>
      <h1> APOD </h1>
      <Datepicker />
    </div>
  );
}
