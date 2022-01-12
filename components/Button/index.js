import styles from "./Button.module.scss";
import { useState, useEffect } from "react";

export default function index() {
  const [liked, setLiked] = useState(localStorage.getItem("like") ?? false);

  useEffect(() => localStorage.setItem("like", liked), [liked]);

  return (
    <>
      <button
        className={styles.button}
        onClick={() => setLiked(() => !liked)}
      >
        <i
          className={
            liked ? `${styles.heart}  ${styles.press}` : `${styles.heart}`
          }
        ></i>
      </button>
    </>
  );
}
