import styles from "./TextWithPicture.module.css";
import Image from "next/image";

export const TextWithPicture = ({ image, text, imageAlt, title }) => {
  return (
    <div className={styles.componentWrapper}>
      <div className={styles.imageWrapper}>
        <Image src={image} objectFit="cover" layout="fill" alt={imageAlt} />
      </div>
      <div className={styles.textWrapper}>
        {title && <h2>{title}</h2>}
        <p>{text}</p>
      </div>
    </div>
  );
};
