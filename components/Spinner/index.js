import styles from './Spinner.module.css'

export default function Spinner() {
    return (
      <div className={styles.ldscontainer}>
        <div className={styles.ldsdualring}></div>
      </div>
    );
  }
  