import styles from "./Button.module.scss";
import { useState, useEffect } from "react";

export default function Button() {
  const [liked, setLiked] = useState(false);

  const state = liked ? "Unlike" : "Like";

  return (
    <>
      <button
        className={styles.button}
        onClick={() => setLiked(() => !liked)}
        aria-label={liked ? "unlike image" : "like image"}
        // style={{
        //   backgroundColor: liked ? "red" : null,
        //   color: liked ? "white" : null,
        // }}
      >
        <div className={styles.heart}>
          {state}
        </div>
      </button>
    </>
  );
}
