import Header from "../Header";
import styles from "./App.module.scss";
import Content from "../Content";

export default function App() {
  return (
    <div className={styles.content}>
      <Header />
      <main className="styles.main">
        <Content />
      </main>
    </div>
  );
}
