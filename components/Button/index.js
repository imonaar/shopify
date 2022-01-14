import styles from "./Button.module.scss";
import { useState, useEffect } from "react";

export default function index() {
  const [liked, setLiked] = useState(false);

  return (
    <>
      <button
        className={styles.button}
        onClick={() => setLiked(() => !liked)}
        aria-label = {liked ? 'unlike image' : 'like image'}
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
