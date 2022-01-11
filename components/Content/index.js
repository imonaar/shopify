import Imag from "../Image";
import Details from "../Details";
import Description from "../Description";
import useSWR from 'swr'
import Spinner from '../Spinner'

import styles from './Content.module.scss'

const api_key = '2ROmjre3e5QxhKveMJlTX5l9C2f9CLk2M5UNJKcr'
const site = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`
const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Content() {
  const {data, error} = useSWR(site, fetcher)
  
  if (error) return <div>failed to load</div>
  if (!data) return <Spinner />

  const {title, date, explanation, url} = data
  console.log(url)
  return (
    <div className={styles.content}>
      <Imag url ={url}/>
      <Details title ={title} date ={date} />
      <Description explanation={explanation} />
    </div>
  );
}
