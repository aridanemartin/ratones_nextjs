import Banner from "@components/Banner/Banner";
import Hero from "@components/Hero/Hero";
import PageLayout from "@components/PageLayout/PageLayout";
import Servicios from "@components/Servicios/Servicios";
import TextBlock from "@components/TextBlock/TextBlock";
import { TextWithPicture } from "@components/TextWithPicture/TextWithPicture";
import Ventajas from "@components/Ventajas/Ventajas";
import useTranslation from "next-translate/useTranslation";
import mainImage from "../public/images/estudio.jpeg";
import logo from "../public/images/logoLarge.webp";
import header from "../public/images/musicLand.webp";

import v1 from "../public/images/icons/like.webp";
import v2 from "../public/images/icons/percent.webp";
import v3 from "../public/images/icons/free.webp";
import v5 from "../public/images/icons/clock.webp";
import v6 from "../public/images/icons/interview.webp";
import Head from "next/head";

const Quienessomos = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Ratone's Room | {t("meta:about.title")}</title>
        <meta name="description" content={t("meta:about.description")} />
      </Head>
      <Hero image={mainImage} logo={logo} />
      <PageLayout>
        <TextBlock title1={t("index:QUIENESSOMOS.title")} />
        <TextWithPicture
          full
          image={header}
          imageAlt="Main Image - Ratone's Room"
          title={t("index:QUIENESSOMOS.title")}
          text={t("index:QUIENESSOMOS.p1")}
          text2={t("index:QUIENESSOMOS.p2")}
          text3={t("index:QUIENESSOMOS.p3")}
          text4={t("index:QUIENESSOMOS.p4")}
        />
        <TextBlock
          title1={t("index:serviciosTitle1")}
          text1={t("index:serviciosText1")}
          description={t("index:serviciosDescription")}
        />

        <Servicios noText />
      </PageLayout>
      <TextBlock
        title1={t("index:ventajasTitle")}
        text1={t("index:ventajasText1")}
      />
      <PageLayout small>
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
      <Banner
        noPrice
        buttonText={t("common:contactForm.title")}
        link="/contacto"
        text={t("index:QUIENESSOMOS.banner")}
      />
    </>
  );
};

export default Quienessomos;
