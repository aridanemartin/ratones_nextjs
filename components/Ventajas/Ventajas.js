import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import styles from "./Ventajas.module.css";

import ventaja1 from "../../public/images/icons/like.png";
import ventaja2 from "../../public/images/icons/percent.png";
import ventaja3 from "../../public/images/icons/free.png";
import ventaja4 from "../../public/images/icons/free2.png";
import ventaja5 from "../../public/images/icons/clock.png";
import ventaja6 from "../../public/images/icons/interview.png";

export default function Ventajas() {
  let { t } = useTranslation();

  return (
    <>
    <div className={styles.listWrapper}>
      <div className={styles.ventajaWrapper}>
        <div className={styles.imageWrapper}>
          <Image src={ventaja1} objectFit="contain" layout="fill" />
        </div>
        <p>{t("index:VENTAJAS.ventaja1")}</p>
      </div>
      <div className={styles.ventajaWrapper}>
        <div className={styles.imageWrapper}>
          <Image src={ventaja2} objectFit="contain" layout="fill" />
        </div>
        <p>{t("index:VENTAJAS.ventaja2")}</p>
      </div>
      <div className={styles.ventajaWrapper}>
        <div className={styles.imageWrapper}>
          <Image src={ventaja3} objectFit="contain" layout="fill" />
        </div>
        <p>{t("index:VENTAJAS.ventaja3")}</p>
      </div>
      <div className={styles.ventajaWrapper}>
        <div className={styles.imageWrapper}>
          <Image src={ventaja3} objectFit="contain" layout="fill" />
        </div>
        <p>{t("index:VENTAJAS.ventaja4")}</p>
      </div>
      <div className={styles.ventajaWrapper}>
        <div className={styles.imageWrapper}>
          <Image src={ventaja5} objectFit="contain" layout="fill" />
        </div>
        <p>{t("index:VENTAJAS.ventaja5")}</p>
      </div>
      <div className={styles.ventajaWrapper}>
        <div className={styles.imageWrapper}>
          <Image src={ventaja6} objectFit="contain" layout="fill" />
        </div>
        <p>{t("index:VENTAJAS.ventaja6")}</p>
      </div>
      </div>
    </>
  );
}
