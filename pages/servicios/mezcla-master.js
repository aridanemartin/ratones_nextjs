import Head from "next/head";
import heroImage from "../../public/images/musicProduction.webp";
import ratonLogo from "../../public/images/logoSoloRaton.webp";
import Hero from "@components/Hero/Hero";

import TextBlock from "@components/TextBlock/TextBlock";
import Faq from "@components/Faq/Faq";
import { TextWithPicture } from "@components/TextWithPicture/TextWithPicture";
import introPicture from "../../public/images/mezcla-master-victor.webp";
import PageLayout from "@components/PageLayout/PageLayout";
import useTranslation from "next-translate/useTranslation";
import Ventajas from "@components/Ventajas/Ventajas";
import img1 from "../../public/images/icons/send.webp";
import img2 from "../../public/images/icons/handshake.webp";
import img3 from "../../public/images/icons/mezcla.webp";
import img4 from "../../public/images/icons/lupa.webp";
import img5 from "../../public/images/icons/fader.webp";
import img6 from "../../public/images/icons/listen.webp";
import fader from "../../public/images/darkFader.webp";
import Banner from "@components/Banner/Banner";
import { List } from "@components/List";
import { SpotifyPlayer } from "@components/SpotifyPlayer/SpotifyPlayer";

export default function MezclaMaster() {
  let { t } = useTranslation();

  let listaIntro = [
    t("index:MEZCLAMASTER.lista.0"),
    t("index:MEZCLAMASTER.lista.1"),
    t("index:MEZCLAMASTER.lista.2"),
  ];

  return (
    <>
      <Head>
        <title>Ratone's Room | {t("meta:mezcla.title")}</title>
        <meta name="description" content={t("meta:mezcla.description")} />
      </Head>
      <Hero
        image={heroImage}
        title={t("index:MEZCLAMASTER.title")}
        logoPeq={ratonLogo}
      />
      <PageLayout>
        <TextBlock title1={t("index:MEZCLAMASTER.title")} />
        <TextWithPicture
          list={listaIntro}
          image={introPicture}
          imageAlt="Mezcla y Master"
          text={t("index:MEZCLAMASTER.p1")}
          text2={t("index:MEZCLAMASTER.p2")}
        />
      </PageLayout>
      <Banner
        text={t("index:MEZCLAMASTER.p5.text")}
        price={t("index:MEZCLAMASTER.p5.price")}
        link="/contacto"
        buttonText={t("index:BANNER.buttonText")}
        disclaimer={t("index:MEZCLAMASTER.p7")}
      />
      <PageLayout>
        <TextBlock title1={t("index:MEZCLAMASTER.servicios.title")} />
        <List
          img={fader}
          li1={t("index:MEZCLAMASTER.servicios.s1")}
          li2={t("index:MEZCLAMASTER.servicios.s2")}
          li3={t("index:MEZCLAMASTER.servicios.s3")}
        />
      </PageLayout>
      <TextBlock
        title1={t("index:MEZCLAMASTER.pasos.title")}
        text1={t("index:MEZCLAMASTER.pasos.subtitle")}
      />
      <PageLayout small>
        <Ventajas
          vertical
          img1={img1}
          img2={img2}
          img3={img3}
          img4={img4}
          img5={img5}
          img6={img6}
          txt1={t("index:MEZCLAMASTER.pasos.1")}
          txt2={t("index:MEZCLAMASTER.pasos.2")}
          txt3={t("index:MEZCLAMASTER.pasos.3")}
          txt4={t("index:MEZCLAMASTER.pasos.4")}
          txt5={t("index:MEZCLAMASTER.pasos.5")}
          txt6={t("index:MEZCLAMASTER.pasos.6")}
        />
      </PageLayout>
      <PageLayout small>
        <TextBlock
          title1={t("index:grabacionesTitle")}
          text1={t("index:mezclaText1")}
        />
        <SpotifyPlayer url="https://open.spotify.com/embed/playlist/4ABcxj7ltU7pyZeLbcZdmK?utm_source=generator" />
      </PageLayout>
      <Faq
        p1={t("index:MEZCLAMASTER.faq.p1")}
        r1={t("index:MEZCLAMASTER.faq.r1")}
        p2={t("index:MEZCLAMASTER.faq.p2")}
        r2={t("index:MEZCLAMASTER.faq.r2")}
        p3={t("index:MEZCLAMASTER.faq.p3")}
        r3={t("index:MEZCLAMASTER.faq.r3")}
        p4={t("index:MEZCLAMASTER.faq.p4")}
        r4={t("index:MEZCLAMASTER.faq.r4")}
        p5={t("index:MEZCLAMASTER.faq.p5")}
        r5={t("index:MEZCLAMASTER.faq.r5")}
        p6={t("index:MEZCLAMASTER.faq.p6")}
        r6={t("index:MEZCLAMASTER.faq.r6")}
        p7={t("index:MEZCLAMASTER.faq.p7")}
        r7={t("index:MEZCLAMASTER.faq.r7")}
      />
    </>
  );
}
