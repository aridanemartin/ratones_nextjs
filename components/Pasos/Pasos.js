import styles from "./Pasos.module.css";
import Image from "next/image";

// images
import Paso1 from "../../public/images/talking2.webp";
import Paso2 from "../../public/images/working.webp";
import Paso3 from "../../public/images/listening1.webp";

import useTranslation from "next-translate/useTranslation";

const Pasos = () => {
  let { t } = useTranslation();

  return (
    <>
      <div className={styles.pasosWrapper}>
        <div className={styles.text1}>
          <h3 className={styles.title}>
            {t("index:PASOS.paso1.title1")}
            <strong>{t("index:PASOS.paso1.title2")}</strong>
          </h3>
          <p className={styles.text}>{t("index:PASOS.paso1.text")}</p>
        </div>
        <div className={styles.image1}>
          <Image
            src={Paso1}
            layout="fill"
            objectFit="cover"
            alt="Primer paso para grabar tu maqueta"
          />
        </div>
        <div className={styles.text2}>
          <h3 className={styles.title}>
            {t("index:PASOS.paso2.title1")}
            <strong>{t("index:PASOS.paso2.title2")}</strong>
          </h3>
          <p className={styles.text}>{t("index:PASOS.paso2.text")}</p>
        </div>
        <div className={styles.image2}>
          <Image
            src={Paso2}
            layout="fill"
            objectFit="cover"
            alt="Segundo paso para grabar tu maqueta"
          />
        </div>
        <div className={styles.text3}>
          <h3 className={styles.title}>
            {t("index:PASOS.paso3.title1")}
            <strong>{t("index:PASOS.paso3.title2")}</strong>
          </h3>
          <p className={styles.text}>{t("index:PASOS.paso3.text")}</p>
        </div>
        <div className={styles.image3}>
          <Image
            src={Paso3}
            layout="fill"
            objectFit="cover"
            alt="Tercer paso para grabar tu maqueta"
          />
        </div>
      </div>
    </>
  );
};

export default Pasos;
