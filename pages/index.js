import Hero from "@components/Hero/Hero";
import Layout from "@components/Layout/Layout";
import Pasos from "@components/Pasos/Pasos";
import SocialBanner from "@components/SocialBanner/SocialBanner";
import styles from "../styles/Home.module.css";
import useTranslation from "next-translate/useTranslation";
import TextBlock from "@components/TextBlock/TextBlock";
import Servicios from "@components/Servicios/Servicios";
import CoverSlider from "@components/CoverSlider/CoverSlider";
import Banner from "@components/Banner/Banner";

import Completa from "../public/images/cover1.webp";
import Testimonials from "@components/Testimonials/Testimonials.js";
import CoverCollage from "@components/CoverCollage/CoverCollage";

import banddarra from "../public/images/banddarra.webp";
import juanca from "../public/images/Juanca.webp";
import fran from "../public/images/franPeregrina.webp";
import borja from "../public/images/borjaRemacha.webp";
import david from "../public/images/davidGarcia.webp";
import v1 from "../public/images/icons/like.webp";
import v2 from "../public/images/icons/percent.webp";
import v3 from "../public/images/icons/free.webp";
import v5 from "../public/images/icons/clock.webp";
import v6 from "../public/images/icons/interview.webp";
import logo from "../public/images/logoLarge.webp";
import Ventajas from "@components/Ventajas/Ventajas";
import PageLayout from "@components/PageLayout/PageLayout";

import { albumData } from "@components/CoverCollage/albumData";

export default function Home() {
  let { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Hero image={Completa} logo={logo} />
      <SocialBanner />
      <PageLayout>
        <TextBlock
          title1={t("index:introTitle1")}
          title2={t("index:introTitle2")}
          text1={t("index:introText1")}
          text2={t("index:introText2")}
          text3={t("index:introText3")}
          text4={t("index:introText4")}
          text5={t("index:introText5")}
        />
        <Pasos />
        <span id="servicios"></span>
        <TextBlock
          title1={t("index:serviciosTitle1")}
          text1={t("index:serviciosText1")}
          description={t("index:serviciosDescription")}
        />
        <Servicios />
        <TextBlock
          title1={t("index:ventajasTitle")}
          text1={t("index:ventajasText1")}
        />
        <PageLayout>
          <Ventajas
            img1={v1}
            img2={v2}
            img3={v3}
            img4={v3}
            img5={v5}
            img6={v6}
            txt1={t("index:VENTAJAS.ventaja1")}
            txt2={t("index:VENTAJAS.ventaja2")}
            txt3={t("index:VENTAJAS.ventaja3")}
            txt4={t("index:VENTAJAS.ventaja4")}
            txt5={t("index:VENTAJAS.ventaja5")}
            txt6={t("index:VENTAJAS.ventaja6")}
          />
        </PageLayout>
      </PageLayout>
      <Banner
        text={t("index:BANNER.text")}
        buttonText={t("index:BANNER.buttonText")}
        link="/"
        background={albumData[0].image.cover1}
        noPrice
      />
      <TextBlock
        title1={t("index:grabacionesTitle")}
        description={t("index:grabacionesDescription")}
        text1={t("index:grabacionesText1")}
      />

      <CoverCollage
        img1={albumData[0].image.cover1}
        title1={albumData[0].title}
        artist1={albumData[0].artist}
        text1={albumData[0].text}
        url1={albumData[0].url}
        img2={albumData[1].image.cover2}
        title2={albumData[1].title}
        artist2={albumData[1].artist}
        text2={albumData[1].text}
        url2={albumData[1].url}
        img3={albumData[2].image.cover3}
        title3={albumData[2].title}
        artist3={albumData[2].artist}
        text3={albumData[2].text}
        url3={albumData[2].url}
        img4={albumData[3].image.cover4}
        title4={albumData[3].title}
        artist4={albumData[3].artist}
        text4={albumData[3].text}
        url4={albumData[3].url}
        img5={albumData[4].image.cover5}
        title5={albumData[4].title}
        artist5={albumData[4].artist}
        text5={albumData[4].text}
        url5={albumData[4].url}
        img6={albumData[5].image.cover6}
        title6={albumData[5].title}
        artist6={albumData[5].artist}
        text6={albumData[5].text}
        url6={albumData[5].url}
        img7={albumData[6].image.cover7}
        title7={albumData[6].title}
        artist7={albumData[6].artist}
        text7={albumData[6].text}
        url7={albumData[6].url}
        img8={albumData[7].image.cover8}
        title8={albumData[7].title}
        artist8={albumData[7].artist}
        text8={albumData[7].text}
        url8={albumData[7].url}
        img9={albumData[8].image.cover9}
        title9={albumData[8].title}
        artist9={albumData[8].artist}
        text9={albumData[8].text}
        url9={albumData[8].url}
        img10={albumData[9].image.cover10}
        title10={albumData[9].title}
        artist10={albumData[9].artist}
        text10={albumData[9].text}
        url10={albumData[9].url}
      />
      <CoverSlider />
      <PageLayout>
        <TextBlock
          title1={t("index:testimoniosTitle")}
          description={t("index:testimoniosDescription")}
          text1={t("index:testimoniosText1")}
        />
      </PageLayout>
      <Testimonials
        text1={t("index:CARROUSEL.text1")}
        desc1={t("index:CARROUSEL.desc1")}
        grupo1={t("index:CARROUSEL.grupo1")}
        lugar1={t("index:CARROUSEL.lugar1")}
        image1={banddarra}
        text2={t("index:CARROUSEL.text2")}
        desc2={t("index:CARROUSEL.desc2")}
        grupo2={t("index:CARROUSEL.grupo2")}
        lugar2={t("index:CARROUSEL.lugar2")}
        image2={juanca}
        text3={t("index:CARROUSEL.text3")}
        desc3={t("index:CARROUSEL.desc3")}
        grupo3={t("index:CARROUSEL.grupo3")}
        lugar3={t("index:CARROUSEL.lugar3")}
        image3={fran}
        text4={t("index:CARROUSEL.text4")}
        desc4={t("index:CARROUSEL.desc4")}
        grupo4={t("index:CARROUSEL.grupo4")}
        lugar4={t("index:CARROUSEL.lugar4")}
        image4={borja}
        text5={t("index:CARROUSEL.text5")}
        desc5={t("index:CARROUSEL.desc5")}
        grupo5={t("index:CARROUSEL.grupo5")}
        lugar5={t("index:CARROUSEL.lugar5")}
        image5={david}
      />
    </div>
  );
}
