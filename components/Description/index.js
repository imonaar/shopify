import styles from "./Description.module.scss";

export default function Description({explanation}) {
  return (
    <div className={styles.description}>
      <span>
       {explanation}
      </span>
    </div>
  );
}
