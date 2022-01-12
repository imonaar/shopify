
import styles from "./Header.module.scss";
import Datepicker from "../Datepicker";

export default function Header({startDate, setStartDate}) {
  return (
    <div className={styles.header}>
      <h1> Spacestagram </h1>
      <Datepicker startDate ={startDate} setStartDate={setStartDate} />
    </div>
  );
}
