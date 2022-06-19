import styles from "./Banner.module.css";
import Link from "next/link";

export default function Banner({
  text,
  price,
  link,
  buttonText,
  disclaimer,
  noPrice,
}) {
  return (
    <div
      className={
        noPrice ? styles.bannerWrap + " " + styles.noPrice : styles.bannerWrap
      }
    >
      <div className={styles.contentWrap}>
        <div className={styles.bannerText}>
          <p>{text}</p>
          <br />
          <h3>{price}</h3>
        </div>
        <Link href={link}>
          <a className={styles.button}>{buttonText}</a>
        </Link>
      </div>
      {noPrice ? "" : <p className={styles.disclaimer}>{disclaimer}</p>}
    </div>
  );
}
