import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import App from "../components/App";

export default function Home() {
  return (
    <div className={styles.container}>
      <App />
    </div>
  );
}
