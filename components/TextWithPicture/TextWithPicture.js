import styles from "./TextWithPicture.module.css";
import Image from "next/image";

export const TextWithPicture = ({
  image,
  text,
  text2,
  text3,
  text4,
  imageAlt,
  title,
  list,
  full,
}) => {
  return (
    <div
      className={
        full
          ? styles.componentWrapper + " " + styles.full
          : styles.componentWrapper
      }
    >
      <div className={styles.imageWrapper}>
        <Image src={image} objectFit="cover" layout="fill" alt={imageAlt} />
      </div>
      <div className={styles.textWrapper}>
        {title && <h2>{title}</h2>}
        {list && (
          <ul className={styles.milestonesList}>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        {text && <p>{text}</p>}
        {text2 && (
          <>
            <br />
            <p>{text2}</p>
          </>
        )}
        {text3 && (
          <>
            <br />
            <p>{text3}</p>
          </>
        )}
        {text4 && (
          <>
            <br />
            <p>{text4}</p>
          </>
        )}
      </div>
    </div>
  );
};
