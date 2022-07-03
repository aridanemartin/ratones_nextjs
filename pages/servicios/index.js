import Hero from "@components/Hero/Hero";
import heroImage from "../../public/images/serviciosCover.webp";
import ratonLogo from "../../public/images/logoSoloRaton.webp";
import Image from "next/image";
import styles from "@styles/Servicios.module.css";

import produccionCompleta from "../../public/images/musicProduction.webp";
import composer from "../../public/images/composer.webp";
import cover1 from "../../public/images/covers/12Cuerdas - (Producción musical _ Mastering).webp";
import cover2 from "../../public/images/covers/Borja Remacha - Mi Primer Amor (Arreglos y Grabación de Guitarras).webp";
import cover3 from "../../public/images/covers/Fran Peregrina - EP Cuenta la leyenda (Producción Musical, Mezcla y Máster).webp";
import cover4 from "../../public/images/covers/Fran Peregrina - Manuela Canta Saetas (Producción Musical, Mezcla y Máster).webp";
import cover5 from "../../public/images/covers/Fran Peregrina - Mi Romance (Producción Musical, Mezcla y Máster).webp";
import cover6 from "../../public/images/covers/Frederico Vaninni - MABO (Máster & DDP).webp";
import cover7 from "../../public/images/covers/Sandra Bautista - Trapezista (Grabación de guitarras).webp";
import cover8 from "../../public/images/covers/Fran Peregrina - Mi Romance (Producción Musical, Mezcla y Máster).webp";
import cover9 from "../../public/images/covers/Frederico Vaninni - MABO (Máster & DDP).webp";
import cover10 from "../../public/images/covers/Sandra Bautista - Trapezista (Grabación de guitarras).webp";

import liveRecording from "../../public/images/liveRecording.webp";
import CoverSlider from "@components/CoverSlider/CoverSlider";
import CoverCollage from "@components/CoverCollage/CoverCollage";
import ModalCover from "@components/ModalCover/ModalCover";

export default function Index() {
  return (
    <>
      <Hero image={heroImage} title="Servicios" logoPeq={ratonLogo} />

      <div className={styles.mainTitle}>
        <h2>Producción Musical</h2>
        <div className={styles.divider}></div>
      </div>
      <div className={styles.servicios}>
        <div className={styles.image1 + " " + styles.images}>
          <Image src={produccionCompleta} layout="fill" objectFit="cover" />
        </div>
        <div className={styles.ptext1}>
          <h3 id="produccion-musical">Producción Completa</h3>
          <p>
            Realizar una producción musical profesional implica varios procesos
            desde que tienes una idea y la desarrollas hasta que terminamos y te
            entregamos el master.
            <br />
            <br />
            Nosotros te acompañamos en todos y cada uno de esos procesos, desde
            la preproducción al mastering, poniendo a tu disposición todo el
            equipo y nuestra experiencia para conseguir sacarle todo el partido
            a tus canciones.
            <br />
            <br />
            Incluye preproducción, grabación, edición, arreglos, mezcla y
            mastering.
          </p>
        </div>

        <div className={styles.image2 + " " + styles.images}>
          <Image src={composer} layout="fill" objectFit="cover" />
        </div>
        <div className={styles.ptext2}>
          <h3>Composición y Arreglos</h3>
          <p>
            ¿Tienes tus canciones solo compuestas con voz, con voz y algún
            instrumento o incluso solo la letra y te falta el resto?
            <br />
            <br />
            Estamos encantados de ayudarte a terminar de darles forma para que
            quedan como imaginabas, a componer y grabar el resto de
            instrumentación, realizar la producción completa desde el principio
            o cualquier otra cosa que se te ocurra para desarrollarlas y
            llevarlas a un nuevo nivel.
          </p>
        </div>
        <div className={styles.image3 + " " + styles.images}>
          <Image src={liveRecording} layout="fill" objectFit="cover" />
        </div>
        <div className={styles.ptext3}>
          <h3>Grabación Móvil Multipista</h3>
          <p>
            Me desplazo donde tú quieras para realizar una grabación multipista
            (4 canales, con posibilidad de ampliar a 16). Ideal si quieres hacer
            una pre-producción antes de grabar un disco, grabar un concierto, un
            ensayo, etc.
          </p>
        </div>
      </div>
      <div className={styles.mainTitle}>
        <h2>Han confiado en nosotros para producir su música</h2>
        <div className={styles.divider}></div>
      </div>
      <CoverCollage
        img1={cover1}
        img2={cover2}
        img3={cover3}
        img4={cover4}
        img5={cover5}
        img6={cover6}
        img7={cover7}
        img8={cover8}
        img9={cover9}
        img10={cover10}
      />
    </>
  );
}
