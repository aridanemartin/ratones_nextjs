import heroImage from "../../public/images/working.webp";
import Hero from "@components/Hero/Hero";
import ImageTextBlock from "@components/ImageTextBlock/ImageTextBlock";
import { List } from "@components/List";
import PageLayout from "@components/PageLayout/PageLayout";
import CoverCollage from "@components/CoverCollage/CoverCollage";
import produccionCompleta from "../../public/images/musicProduction.webp";
import Banner from "@components/Banner/Banner";
import TextBlock from "@components/TextBlock/TextBlock";
import Faq from "@components/Faq/Faq";
import useTranslation from "next-translate/useTranslation";
import Ventajas from "@components/Ventajas/Ventajas";

import paso1 from "../../public/images/icons/inbox.webp";
import paso2 from "../../public/images/icons/handshake.webp";
import paso3 from "../../public/images/icons/work.webp";
import paso4 from "../../public/images/icons/microphone.webp";
import paso5 from "../../public/images/icons/fader.webp";
import paso6 from "../../public/images/icons/listen.webp";
import cantautora from "../../public/images/cantautora.webp";
import { SpotifyPlayer } from "@components/SpotifyPlayer/SpotifyPlayer";
import {
  albumDataProdEn,
  albumDataProdEs,
} from "@components/CoverCollage/albumData";
import Head from "next/head";

export default function ProduccionMusical() {
  let { t, lang } = useTranslation();
  let albumData = lang === "es" ? albumDataProdEs : albumDataProdEn;

  return (
    <>
      <Head>
        <title>Ratone's Room | {t("meta:music-production.title")}</title>
        <meta
          name="description"
          content={t("meta:music-production.description")}
        />
      </Head>
      <Hero image={heroImage} title={t("index:produccionTitle")} />
      <PageLayout>
        <TextBlock
          title1={t("index:PRODUCCION-MUSICAL.p2")}
          text1={t("index:PRODUCCION-MUSICAL.p1")}
        />

        <ImageTextBlock
          txt1={t("index:PRODUCCION-MUSICAL.p3")}
          txt2={t("index:PRODUCCION-MUSICAL.p4")}
          img={produccionCompleta}
        />
      </PageLayout>

      <Banner
        text={t("index:PRODUCCION-MUSICAL.p5.text")}
        price={t("index:PRODUCCION-MUSICAL.p5.price")}
        link="/contacto"
        buttonText="CONTACTO"
        disclaimer={t("index:PRODUCCION-MUSICAL.p8")}
      />

      <PageLayout>
        <TextBlock title1={t("index:PRODUCCION-MUSICAL.p7")} />

        <List
          img={cantautora}
          li1={t("index:PRODUCCION-MUSICAL.servicios.s1")}
          li2={t("index:PRODUCCION-MUSICAL.servicios.s2")}
          li3={t("index:PRODUCCION-MUSICAL.servicios.s3")}
          li4={t("index:PRODUCCION-MUSICAL.servicios.s4")}
          li5={t("index:PRODUCCION-MUSICAL.servicios.s5")}
          li6={t("index:PRODUCCION-MUSICAL.servicios.s6")}
          li7={t("index:PRODUCCION-MUSICAL.servicios.s7")}
        />
      </PageLayout>

      <PageLayout>
        <TextBlock
          title1={t("index:PRODUCCION-MUSICAL.pasos.title")}
          text1={t("index:PRODUCCION-MUSICAL.pasos.desc")}
        />
      </PageLayout>

      <PageLayout small>
        <Ventajas
          vertical
          img1={paso1}
          img2={paso2}
          img3={paso3}
          img4={paso4}
          img5={paso5}
          img6={paso6}
          txt1={t("index:PRODUCCION-MUSICAL.pasos.1")}
          txt2={t("index:PRODUCCION-MUSICAL.pasos.2")}
          txt3={t("index:PRODUCCION-MUSICAL.pasos.3")}
          txt4={t("index:PRODUCCION-MUSICAL.pasos.4")}
          txt5={t("index:PRODUCCION-MUSICAL.pasos.5")}
          txt6={t("index:PRODUCCION-MUSICAL.pasos.6")}
        />
      </PageLayout>

      <PageLayout small>
        <TextBlock
          title1={t("index:grabacionesTitle")}
          // description={t("index:grabacionesDescription")}
          text1={t("index:produccionText1")}
        />
        <SpotifyPlayer url="https://open.spotify.com/embed/playlist/7dUDkLeoRkQLAYjUvCuzDQ?utm_source=generator" />
      </PageLayout>
      <CoverCollage
        isReduced={true}
        img1={albumData[0].image.cover10}
        title1={albumData[0].title}
        artist1={albumData[0].artist}
        text1={albumData[0].text}
        url1={albumData[0].url}
        img2={albumData[1].image.cover1}
        title2={albumData[1].title}
        artist2={albumData[1].artist}
        text2={albumData[1].text}
        url2={albumData[1].url}
        img3={albumData[2].image.cover4}
        title3={albumData[2].title}
        artist3={albumData[2].artist}
        text3={albumData[2].text}
        url3={albumData[2].url}
        img4={albumData[3].image.cover11}
        title4={albumData[3].title}
        artist4={albumData[3].artist}
        text4={albumData[3].text}
        url4={albumData[3].url}
        img5={albumData[4].image.cover12}
        title5={albumData[4].title}
        artist5={albumData[4].artist}
        text5={albumData[4].text}
        url5={albumData[4].url}
      />
      <Faq
        p1={t("index:PRODUCCION-MUSICAL.faq.p1")}
        r1={t("index:PRODUCCION-MUSICAL.faq.r1")}
        p2={t("index:PRODUCCION-MUSICAL.faq.p2")}
        r2={t("index:PRODUCCION-MUSICAL.faq.r2")}
        p3={t("index:PRODUCCION-MUSICAL.faq.p3")}
        r3={t("index:PRODUCCION-MUSICAL.faq.r3")}
        p4={t("index:PRODUCCION-MUSICAL.faq.p4")}
        r4={t("index:PRODUCCION-MUSICAL.faq.r4")}
        p5={t("index:PRODUCCION-MUSICAL.faq.p5")}
        r5={t("index:PRODUCCION-MUSICAL.faq.r5")}
        p6={t("index:PRODUCCION-MUSICAL.faq.p6")}
        r6={t("index:PRODUCCION-MUSICAL.faq.r6")}
        p7={t("index:PRODUCCION-MUSICAL.faq.p7")}
        r7={t("index:PRODUCCION-MUSICAL.faq.r7")}
        p8={t("index:PRODUCCION-MUSICAL.faq.p8")}
        r8={t("index:PRODUCCION-MUSICAL.faq.r8")}
        p9={t("index:PRODUCCION-MUSICAL.faq.p9")}
        r9={t("index:PRODUCCION-MUSICAL.faq.r9")}
      />
    </>
  );
}
