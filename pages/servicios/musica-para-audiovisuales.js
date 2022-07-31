import heroImage from "../../public/images/audiovisualesHero.webp";
import ratonLogo from "../../public/images/logoSoloRaton.webp";
import Hero from "@components/Hero/Hero";

import TextBlock from "@components/TextBlock/TextBlock";
import PageLayout from "@components/PageLayout/PageLayout";
import useTranslation from "next-translate/useTranslation";
import { TextWithPicture } from "@components/TextWithPicture/TextWithPicture";
import ImageTextBlock from "@components/ImageTextBlock/ImageTextBlock";
import introPicture from "../../public/images/podcast.webp";
import Banner from "@components/Banner/Banner";
import { VideoGallery } from "@components/VideoGallery/VideoGallery";

export default function MusicaParaAudiovisuales() {
  let { t } = useTranslation();

  let listaIntro = [
    t("index:AUDIOVISUALES.lista.0"),
    t("index:AUDIOVISUALES.lista.1"),
    t("index:AUDIOVISUALES.lista.2"),
    t("index:AUDIOVISUALES.lista.3"),
  ];

  let videoArray = [
    {
      title: `${t("index:AUDIOVISUALES.videos.0.title")}`,
      src: `${t("index:AUDIOVISUALES.videos.0.src")}`,
    },
    {
      title: `${t("index:AUDIOVISUALES.videos.1.title")}`,
      src: `${t("index:AUDIOVISUALES.videos.1.src")}`,
    },
    {
      title: `${t("index:AUDIOVISUALES.videos.2.title")}`,
      src: `${t("index:AUDIOVISUALES.videos.2.src")}`,
    },
  ];

  return (
    <>
      <Hero
        image={heroImage}
        title="Música para audiovisuales"
        logoPeq={ratonLogo}
      />
      <PageLayout>
        <TextBlock
          title1={t("index:AUDIOVISUALES.title")}
          text1={t("index:AUDIOVISUALES.p1")}
          text2={t("index:AUDIOVISUALES.p2")}
        />
        <TextWithPicture
          list={listaIntro}
          image={introPicture}
          imageAlt="Mezcla y Master"
          text={t("index:AUDIOVISUALES.p1")}
          text2={t("index:AUDIOVISUALES.p2")}
        />
      </PageLayout>
      <Banner
        noPrice
        text={t("index:AUDIOVISUALES.p3.text")}
        link="/contacto"
        buttonText="CONTACTO"
      />
      <PageLayout>
        <TextBlock
          title1={t("index:AUDIOVISUALES.trabajos.title")}
          text1={t("index:AUDIOVISUALES.trabajos.p")}
        />
        <VideoGallery videoArray={videoArray} />
      </PageLayout>
    </>
  );
}
