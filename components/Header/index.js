import styles from "./Header.module.scss";
import Datepicker from "../Datepicker";

export default function Header({ startDate, setStartDate }) {
  return (
    <div className={styles.header}>
      <div>
        <h1> Spacestagram </h1>
      </div>
      <div>
        <Datepicker startDate={startDate} setStartDate={setStartDate} placeholder="pick a date" />
      </div>
    </div>
  );
}
