import styles from "./Image.module.scss";
import Image from "next/image";
import profPic from "../../public/apod.jpeg";

export default function Imag({ url, title }) {
  return (
    <Image src={url} alt={title} layout="responsive" width={600} height={400} objectFit="cover" />
  );
}
