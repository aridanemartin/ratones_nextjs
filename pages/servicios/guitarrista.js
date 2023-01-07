import heroImage from "../../public/images/guitarraHero2.webp";
import queIncluye from "../../public/images/guitarras-que-incluye.webp";
import introPicture from "../../public/images/fotosVictor/_DSC0159.webp";
import ratonLogo from "../../public/images/logoSoloRaton.webp";
import Hero from "@components/Hero/Hero";
import styles from "@styles/Servicios.module.css";

import img1 from "../../public/images/icons/send.webp";
import img2 from "../../public/images/icons/handshake.webp";
import img3 from "../../public/images/icons/grabacion.webp";
import img4 from "../../public/images/icons/produccion.webp";

import TextBlock from "@components/TextBlock/TextBlock";
import Faq from "@components/Faq/Faq";
import useTranslation from "next-translate/useTranslation";
import PageLayout from "@components/PageLayout/PageLayout";
import { TextWithPicture } from "@components/TextWithPicture/TextWithPicture";
import Ventajas from "@components/Ventajas/Ventajas";
import { List } from "@components/List";
import Banner from "@components/Banner/Banner";
import { SpotifyPlayer } from "@components/SpotifyPlayer/SpotifyPlayer";
import { YoutubePlayer } from "@components/YoutubePlayer/YoutubePlayer";
import Head from "next/head";

export default function Guitarrista() {
  let { t } = useTranslation();
  let listaIntro = [
    t("index:GUITARRISTA.lista.0"),
    t("index:GUITARRISTA.lista.1"),
    t("index:GUITARRISTA.lista.2"),
  ];

  return (
    <>
      <Head>
        <title>Ratone's Room | {t("meta:guitar.title")}</title>
        <meta name="description" content={t("meta:guitar.description")} />
      </Head>
      <Hero
        image={heroImage}
        title={t("index:GUITARRISTA.title")}
        logoPeq={ratonLogo}
      />
      <PageLayout>
        <div className={styles.mainTitle}>
          <h2>{t("index:GUITARRISTA.subtitle")}</h2>
          <div className={styles.divider}></div>
        </div>
        <TextWithPicture
          list={listaIntro}
          image={introPicture}
          text={t("index:GUITARRISTA.p1")}
          altText="lalal"
        />
      </PageLayout>
      <Banner
        text={t("index:GUITARRISTA.p5.text")}
        price={t("index:GUITARRISTA.p5.price")}
        link="/contacto"
        buttonText="CONTACTO"
        disclaimer={t("index:GUITARRISTA.p7")}
      />
      <PageLayout>
        <TextBlock title1={t("index:PRODUCCION-MUSICAL.p7")} />

        <List
          img={queIncluye}
          li1={t("index:GUITARRISTA.servicios.s1")}
          li2={t("index:GUITARRISTA.servicios.s2")}
          li3={t("index:GUITARRISTA.servicios.s3")}
        />
      </PageLayout>

      <PageLayout>
        <TextBlock
          title1={t("index:GUITARRISTA.subtitle2")}
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
      <PageLayout small>
        <TextBlock
          title1={t("index:grabacionesTitle")}
          description={t("index:grabacionesDescription")}
          text1={t("index:guitarrasText1")}
        />
        <SpotifyPlayer url="https://open.spotify.com/embed/playlist/7LgDofhEkJDbieMi9wBQyh?utm_source=generator" />
        <YoutubePlayer />
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
