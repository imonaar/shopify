import {useState} from 'react'
import Header from "../Header";
import styles from "./App.module.scss";
import Content from "../Content";



export default function App() {
  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate)
  
  return (
    <div className={styles.content}>
      <Header startDate ={startDate} setStartDate={setStartDate}/>

      <main className="styles.main">
        <Content startDate = {startDate} />
      </main>
    </div>
  );
}
