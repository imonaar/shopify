import styles from "./Image.module.scss";
import Image from "next/image";
import profPic from "../../public/apod.jpeg";

export default function Imag({ url }) {
  return (
   
      <Image
        src={url}
        alt="picture"
        layout="responsive"
        width={700}
        height={475}
/>
  );
}
