import Hero from "@components/Hero/Hero";
import PageLayout from "@components/PageLayout/Layout";
import Pasos from "@components/Pasos/Pasos";
import SocialBanner from "@components/SocialBanner/SocialBanner";
import styles from "../styles/Home.module.css";
import useTranslation from "next-translate/useTranslation";
import TextBlock from "@components/TextBlock/TextBlock";
import Servicios from "@components/Servicios/Servicios";
import CoverSlider from "@components/CoverSlider/CoverSlider";
import Banner from "@components/Banner/Banner";

import Completa from "../public/images/cover1.jpg";
import heroLogo from "../public/images/logoLarge.png";
import Testimonials from "@components/Testimonials/Testimonials.js";
import CoverCollage from "@components/CoverCollage/CoverCollage";

import banddarra from "../public/images/banddarra.jpg";
import juanca from "../public/images/juanca.jpeg";
import fran from "../public/images/franPeregrina.jpg";
import borja from "../public/images/borjaRemacha.jpg";
import cover1 from "../public/images/covers/12Cuerdas - (Producción musical _ Mastering).jpeg";
import cover2 from "../public/images/covers/Borja Remacha - Mi Primer Amor (Arreglos y Grabación de Guitarras).jpeg";
import cover3 from "../public/images/covers/Fran Peregrina - EP Cuenta la leyenda (Producción Musical, Mezcla y Máster).jpeg";
import cover4 from "../public/images/covers/Fran Peregrina - Manuela Canta Saetas (Producción Musical, Mezcla y Máster).jpeg";
import cover5 from "../public/images/covers/Fran Peregrina - Mi Romance (Producción Musical, Mezcla y Máster).jpeg";
import cover6 from "../public/images/covers/Frederico Vaninni - MABO (Máster & DDP).jpeg";
import cover7 from "../public/images/covers/Sandra Bautista - Trapezista (Grabación de guitarras).jpeg";
import cover8 from "../public/images/covers/Fran Peregrina - Mi Romance (Producción Musical, Mezcla y Máster).jpeg";
import cover9 from "../public/images/covers/Frederico Vaninni - MABO (Máster & DDP).jpeg";
import cover10 from "../public/images/covers/Sandra Bautista - Trapezista (Grabación de guitarras).jpeg";
import Layout from "@components/Layout/Layout";
import Ventajas from "@components/Ventajas/Ventajas";

export default function Home() {
  let { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Hero image={Completa} logo={heroLogo} />
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
        <TextBlock
          title1={t("index:ventajasTitle")}
          text1={t("index:ventajasText1")}
        />
        <Ventajas/>
        <span id="servicios"></span>
        <TextBlock
          title1={t("index:serviciosTitle1")}
          text1={t("index:serviciosText1")}
          description={t("index:serviciosDescription")}
        />
        <Servicios />
        
      </PageLayout>
      <Banner
        text={t("index:BANNER.text")}
        buttonText={t("index:BANNER.buttonText")}
        link="/"
      />
      <TextBlock
          title1={t("index:grabacionesTitle")}
          description={t("index:grabacionesDescription")}
          text1={t("index:grabacionesText1")}
        />
      <CoverCollage
          img1={cover1}
          text1="12Cuerdas - Producción musical, grabación de guitarras eléctricas y máster"
          url1="https://open.spotify.com/embed/track/6vsFsGiPywocHO0KEKJeen?utm_source=generator&theme=0"
          img2={cover2}
          text2="Borja Remacha - Arreglos y grabación de guitarras"
          url2=""
          img3={cover3}
          text3="Fran Peregrina - Producción musical, mezcla y máster"
          url3="https://open.spotify.com/embed/track/1EfLTBmzunMGZ0HWqS8pPY?utm_source=generator&theme=0"
          img4={cover4}
          text4="Fran Peregrina - Producción musical, mezcla y máster"
          url4="https://open.spotify.com/embed/track/65DB7aWziy4eWAjjMtTRSb?utm_source=generator&theme=0"
          img5={cover5}
          text5="Fran Peregrina - Producción musical, mezcla y máster"
          url5="https://open.spotify.com/embed/track/4zQDRKC0rioQdIjpQn8bXV?utm_source=generator&theme=0"
          img6={cover6}
          text6="Frederico Vannini - Máster"
          url6="https://open.spotify.com/embed/track/30qzYq7Vp3pFfL7sZozixk?utm_source=generator&theme=0"
          img7={cover7}
          text7="Sandra Bautista - Grabación de guitarras"
          url7="https://open.spotify.com/embed/track/0KTJ3DShRlLR6vxKahwxWC?utm_source=generator&theme=0"
          img8={cover8}
          text8="Dr. Basilio - Grabación de guitarras"
          url8="https://open.spotify.com/embed/track/11c5g9dX6TW2nBSxSzE9F9?utm_source=generator&theme=0"
          img9={cover9}
          text9="Dos"
          img10={cover10}
          text10="Bernard Horse - Producción musical, grabación de voces, mezcla y máster."
        />
      <CoverSlider/>
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
      />
    </div>
  );
}
