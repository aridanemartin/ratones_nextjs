import Image from "next/image";
import styles from "./Servicios.module.css";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

// Images
import grabacion from "../../public/images/icons/grabacion.webp";
import audiovisuales from "../../public/images/icons/audiovisuales.webp";
import mezcla from "../../public/images/icons/mezcla.webp";
import produccion from "../../public/images/icons/produccion.webp";

const Servicios = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.serviciosContainer}>
        <div className={styles.servicio + " " + styles.servicio1}>
          <div className={styles.servicioImage}>
            <Image src={produccion} layout="fill" objectFit="cover" />
          </div>
          <h2>{t("index:produccionTitle")}</h2>
          <p>{t("index:produccionText")}</p>
          <Link href="/servicios/produccion-musical">
            <a>Más Información</a>
          </Link>
        </div>
        <div className={styles.servicio + " " + styles.servicio2}>
          <div className={styles.servicioImage}>
            <Image src={grabacion} layout="fill" objectFit="cover" />
          </div>
          <h2>{t("index:grabacionTitle")}</h2>
          <p>{t("index:grabacionText")}</p>
          <Link href="/servicios/guitarrista">
            <a>Más Información</a>
          </Link>
        </div>
        <div className={styles.servicio + " " + styles.servicio3}>
          <div className={styles.servicioImage}>
            <Image src={audiovisuales} layout="fill" objectFit="cover" />
          </div>
          <h2>{t("index:audiovisualesTitle")}</h2>
          <p>{t("index:audiovisualesText")}</p>
          <Link href="/servicios/musica-para-audiovisuales">
            <a>Más Información</a>
          </Link>
        </div>
        <div className={styles.servicio + " " + styles.servicio4}>
          <div className={styles.servicioImage}>
            <Image src={mezcla} layout="fill" objectFit="cover" />
          </div>
          <h2>{t("index:mezclaTitle")}</h2>
          <p>{t("index:mezclaText")}</p>
          <Link href="/servicios/mezcla-master">
            <a>Más Información</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Servicios;
