import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import styles from "./Ventajas.module.scss";

export default function Ventajas({
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  txt1,
  txt2,
  txt3,
  txt4,
  txt5,
  txt6,
  desc1,
  desc2,
  desc3,
  desc4,
  desc5,
  desc6,
  vertical,
}) {
  return (
    <>
      <div
        className={styles.listWrapper + " " + `${vertical && styles.vertical}`}
      >
        <div className={styles.ventajaWrapper}>
          <div className={styles.imageWrapper}>
            <Image src={img1} objectFit="contain" layout="fill" />
          </div>
          <div className={styles.textWrapper}>
            <h3>{txt1}</h3>
            <p>{desc1}</p>
          </div>
        </div>
        <div className={styles.ventajaWrapper}>
          <div className={styles.imageWrapper}>
            <Image src={img2} objectFit="contain" layout="fill" />
          </div>
          <div className={styles.textWrapper}>
            <h3>{txt2}</h3>
            <p>{desc2}</p>
          </div>
        </div>
        <div className={styles.ventajaWrapper}>
          <div className={styles.imageWrapper}>
            <Image src={img3} objectFit="contain" layout="fill" />
          </div>
          <div className={styles.textWrapper}>
            <h3>{txt3}</h3>
            <p>{desc3}</p>
          </div>
        </div>
        <div className={styles.ventajaWrapper}>
          <div className={styles.imageWrapper}>
            <Image src={img4} objectFit="contain" layout="fill" />
          </div>
          <div className={styles.textWrapper}>
            <h3>{txt4}</h3>
            <p>{desc4}</p>
          </div>
        </div>
        {img5 && (
          <div className={styles.ventajaWrapper}>
            <div className={styles.imageWrapper}>
              <Image src={img5} objectFit="contain" layout="fill" />
            </div>
            <div className={styles.textWrapper}>
              <h3>{txt5}</h3>
              <p>{desc5}</p>
            </div>
          </div>
        )}
        {img6 && (
          <div className={styles.ventajaWrapper}>
            <div className={styles.imageWrapper}>
              <Image src={img6} objectFit="contain" layout="fill" />
            </div>
            <div className={styles.textWrapper}>
              <h3>{txt6}</h3>
              <p>{desc6}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
