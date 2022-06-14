import styles from "./Banner.module.css";
import Link from "next/link";

export default function Banner({ text, price, link, buttonText, disclaimer }) {
  return (
    <div className={styles.bannerWrap}>
      <div className={styles.contentWrap}>
        <h3 className={styles.bannerText}>
          {text}
          <br />
          <strong>{price}</strong>
        </h3>
        <Link href={link}>
          <a className={styles.button}>{buttonText}</a>
        </Link>
      </div>
      <p className={styles.disclaimer}>{disclaimer}</p>
    </div>
  );
}
