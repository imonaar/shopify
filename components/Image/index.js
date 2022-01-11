import styles from "./Image.module.scss";
import Image from "next/image";
import profPic from "../../public/apod.jpeg";

export default function Imag() {
  return (
  
      <Image src={profPic} alt="picture" layout="responsive" height={500} />
 
  );
}
