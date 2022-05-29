import heroImage from "../../public/images/musicProduction.jpg";
import ratonLogo from "../../public/images/logoSoloRaton.png";
import Hero from "@components/Hero/Hero";

import TextBlock from "@components/TextBlock/TextBlock";
import Faq from "@components/Faq/Faq";
import { TextWithPicture } from "@components/TextWithPicture/TextWithPicture";
import introPicture from "../../public/images/fotosVictor/_DSC0159.jpg";
import PageLayout from "@components/PageLayout/PageLayout";
import useTranslation from "next-translate/useTranslation";
import Ventajas from "@components/Ventajas/Ventajas";
import img1 from "../../public/images/icons/send.png";
import img2 from "../../public/images/icons/handshake.png";
import img3 from "../../public/images/icons/mezcla.png";
import img4 from "../../public/images/icons/lupa.png";
import img5 from "../../public/images/icons/fader.png";
import img6 from "../../public/images/icons/listen.png";
import fader from "../../public/images/darkFader.jpg";
import Banner from "@components/Banner/Banner";
import { List } from "@components/List";

export default function MezclaMaster() {
  let { t } = useTranslation();

  let listaIntro = [
    t("index:MEZCLAMASTER.lista.0"),
    t("index:MEZCLAMASTER.lista.1"),
    t("index:MEZCLAMASTER.lista.2"),
  ];

  return (
    <>
      <Hero image={heroImage} title="Mezcla y Master" logoPeq={ratonLogo} />
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
        text={t("index:MEZCLAMASTER.p5")}
        link="/contacto"
        buttonText="CONTACTO"
        disclaimer={t("index:MEZCLAMASTER.p7")}
      />
      <TextBlock title1="Pasos" />
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
      <PageLayout>
        <TextBlock title1={t("index:MEZCLAMASTER.servicios.title")} />
        <List
          img={fader}
          li1={t("index:MEZCLAMASTER.servicios.s1")}
          li2={t("index:MEZCLAMASTER.servicios.s2")}
          li3={t("index:MEZCLAMASTER.servicios.s3")}
        />
      </PageLayout>

      <TextBlock description={t("index:MEZCLAMASTER.p6")} />

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
