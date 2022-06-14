import heroImage from "../../public/images/working.jpg";
import Hero from "@components/Hero/Hero";
import ImageTextBlock from "@components/ImageTextBlock/ImageTextBlock";
import { List } from "@components/List";
import PageLayout from "@components/PageLayout/PageLayout";
import CoverCollage from "@components/CoverCollage/CoverCollage";
import CoverSlider from "@components/CoverSlider/CoverSlider";
import produccionCompleta from "../../public/images/musicProduction.jpg";
import Banner from "@components/Banner/Banner";
import TextBlock from "@components/TextBlock/TextBlock";
import Faq from "@components/Faq/Faq";
import useTranslation from "next-translate/useTranslation";
import Ventajas from "@components/Ventajas/Ventajas";

import paso1 from "../../public/images/icons/inbox.png";
import paso2 from "../../public/images/icons/handshake.png";
import paso3 from "../../public/images/icons/work.png";
import paso4 from "../../public/images/icons/microphone.png";
import paso5 from "../../public/images/icons/fader.png";
import paso6 from "../../public/images/icons/listen.png";
import cover1 from "../../public/images/covers/12Cuerdas - (Producción musical _ Mastering).jpeg";
import cover2 from "../../public/images/covers/Borja Remacha - Mi Primer Amor (Arreglos y Grabación de Guitarras).jpeg";
import cover3 from "../../public/images/covers/Fran Peregrina - EP Cuenta la leyenda (Producción Musical, Mezcla y Máster).jpeg";
import cover4 from "../../public/images/covers/Fran Peregrina - Manuela Canta Saetas (Producción Musical, Mezcla y Máster).jpeg";
import cover5 from "../../public/images/covers/Fran Peregrina - Mi Romance (Producción Musical, Mezcla y Máster).jpeg";
import cover6 from "../../public/images/covers/Frederico Vaninni - MABO (Máster & DDP).jpeg";
import cover7 from "../../public/images/covers/Sandra Bautista - Trapezista (Grabación de guitarras).jpeg";
import cover8 from "../../public/images/covers/Fran Peregrina - Mi Romance (Producción Musical, Mezcla y Máster).jpeg";
import cover9 from "../../public/images/covers/Frederico Vaninni - MABO (Máster & DDP).jpeg";
import cover10 from "../../public/images/covers/Sandra Bautista - Trapezista (Grabación de guitarras).jpeg";
import cantautora from "../../public/images/cantautora.jpg";

export default function ProduccionMusical() {
  let { t } = useTranslation();

  return (
    <>
      <Hero image={heroImage} title="Producción Musical" />
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
        <TextBlock description={t("index:PRODUCCION-MUSICAL.p6")} />
      </PageLayout>
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
      <CoverSlider />
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
