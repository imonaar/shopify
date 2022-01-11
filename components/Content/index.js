import Imag from "../Image";
import Details from "../Details";
import Description from "../Description";

import styles from './Content.module.scss'

export default function Content() {
  return (
    <div className={styles.content}>
      <Imag />
      <Details />
      <Description />
    </div>
  );
}
