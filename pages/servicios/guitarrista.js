import heroImage from "../../public/images/guitarraHero2.jpg";
import textImage from "../../public/images/guitarraNegro.jpg";
import ratonLogo from "../../public/images/logoSoloRaton.png";
import Hero from "@components/Hero/Hero";
import styles from "@styles/Servicios.module.css";

import img1 from "../../public/images/icons/send.png";
import img2 from "../../public/images/icons/handshake.png";
import img3 from "../../public/images/icons/grabacion.png";
import img4 from "../../public/images/icons/produccion.png";

import TextBlock from "@components/TextBlock/TextBlock";
import Faq from "@components/Faq/Faq";
import useTranslation from "next-translate/useTranslation";
import PageLayout from "@components/PageLayout/PageLayout";
import { TextWithPicture } from "@components/TextWithPicture/TextWithPicture";
import Ventajas from "@components/Ventajas/Ventajas";
import { List } from "@components/List";
import Banner from "@components/Banner/Banner";

export default function Guitarrista() {
  let { t } = useTranslation();
  let listaIntro = [
    t("index:GUITARRISTA.lista.0"),
    t("index:GUITARRISTA.lista.1"),
    t("index:GUITARRISTA.lista.2"),
  ];

  return (
    <>
      <Hero
        image={heroImage}
        title="Grabación de guitarras"
        logoPeq={ratonLogo}
      />
      <PageLayout>
        <div className={styles.mainTitle}>
          <h2>Contrata a un guitarrista de sesión</h2>
          <div className={styles.divider}></div>
        </div>
        <TextWithPicture
          list={listaIntro}
          image={textImage}
          text={t("index:GUITARRISTA.p1")}
          altText="lalal"
        />

        <TextBlock title1={t("index:PRODUCCION-MUSICAL.p7")} />

        <List
          img={heroImage}
          li1={t("index:GUITARRISTA.servicios.s1")}
          li2={t("index:GUITARRISTA.servicios.s2")}
          li3={t("index:GUITARRISTA.servicios.s3")}
        />

        <TextBlock
          title1={t("index:GUITARRISTA.title")}
          text1={t("index:GUITARRISTA.p2")}
          text2={t("index:GUITARRISTA.p3")}
          text3={t("index:GUITARRISTA.p4")}
        />
      </PageLayout>
      <PageLayout small>
        <Ventajas
          vertical
          img1={img1}
          img2={img2}
          img3={img3}
          img4={img4}
          txt1={t("index:GUITARRISTA.pasos.1")}
          txt2={t("index:GUITARRISTA.pasos.2")}
          txt3={t("index:GUITARRISTA.pasos.3")}
          txt4={t("index:GUITARRISTA.pasos.4")}
        />
      </PageLayout>

      <Faq
        p1={t("index:GUITARRISTA.faq.p1")}
        r1={t("index:GUITARRISTA.faq.r1")}
        p2={t("index:GUITARRISTA.faq.p2")}
        r2={t("index:GUITARRISTA.faq.r2")}
        p3={t("index:GUITARRISTA.faq.p3")}
        r3={t("index:GUITARRISTA.faq.r3")}
        p4={t("index:GUITARRISTA.faq.p4")}
        r4={t("index:GUITARRISTA.faq.r4")}
        p5={t("index:GUITARRISTA.faq.p5")}
        r5={t("index:GUITARRISTA.faq.r5")}
        p6={t("index:GUITARRISTA.faq.p6")}
        r6={t("index:GUITARRISTA.faq.r6")}
        p7={t("index:GUITARRISTA.faq.p7")}
        r7={t("index:GUITARRISTA.faq.r7")}
      />
    </>
  );
}
