import styles from "./Details.module.scss";
import Button from '../Button/index'

export default function Details({title, date}) {
  return (
    <div className={styles.details}>
      <h2>{title}</h2>
      <span> {date} </span>
      <Button />
    </div>
  );
}
