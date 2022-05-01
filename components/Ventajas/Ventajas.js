import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import styles from "./Ventajas.module.css";

export default function Ventajas(props) {

  const {img1,img2,img3,img4,img5,img6,txt1,txt2,txt3,txt4,txt5,txt6,vertical} = props;

  return (
    <>
      <div className={styles.listWrapper + ' ' + `${vertical && styles.vertical}`}>
        <div className={styles.ventajaWrapper}>
          <div className={styles.imageWrapper}>
            <Image src={img1} objectFit="contain" layout="fill" />
          </div>
          <p>{txt1}</p>
        </div>
        <div className={styles.ventajaWrapper}>
          <div className={styles.imageWrapper}>
            <Image src={img2} objectFit="contain" layout="fill" />
          </div>
          <p>{txt2}</p>
        </div>
        <div className={styles.ventajaWrapper}>
          <div className={styles.imageWrapper}>
            <Image src={img3} objectFit="contain" layout="fill" />
          </div>
          <p>{txt3}</p>
        </div>
        <div className={styles.ventajaWrapper}>
          <div className={styles.imageWrapper}>
            <Image src={img4} objectFit="contain" layout="fill" />
          </div>
          <p>{txt4}</p>
        </div>
        <div className={styles.ventajaWrapper}>
          <div className={styles.imageWrapper}>
            <Image src={img5} objectFit="contain" layout="fill" />
          </div>
          <p>{txt5}</p>
        </div>
        <div className={styles.ventajaWrapper}>
          <div className={styles.imageWrapper}>
            <Image src={img6} objectFit="contain" layout="fill" />
          </div>
          <p>{txt6}</p>
        </div>
        
      </div>
    </>
  );
}
