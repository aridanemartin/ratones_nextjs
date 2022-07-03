import Hero from "@components/Hero/Hero";
import PageLayout from "@components/PageLayout/PageLayout";
import Servicios from "@components/Servicios/Servicios";
import TextBlock from "@components/TextBlock/TextBlock";
import { TextWithPicture } from "@components/TextWithPicture/TextWithPicture";
import useTranslation from "next-translate/useTranslation";
import mainImage from "../public/images/estudio.webp";
import logo from "../public/images/logoLarge.webp";
import header from "../public/images/musicLand.webp";

const Quienessomos = () => {
  const { t } = useTranslation();

  return (
    <>
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
        <Servicios />
      </PageLayout>
    </>
  );
};

export default Quienessomos;
