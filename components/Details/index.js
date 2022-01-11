import styles from "./Details.module.scss";

export default function Details({title, date}) {
  return (
    <div className={styles.details}>
      <h2>{title}</h2>
      <span> {date} </span>
      <button> like </button>
    </div>
  );
}
