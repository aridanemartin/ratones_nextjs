import Hero from "@components/Hero/Hero";
import PageLayout from "@components/PageLayout/PageLayout";
import TextBlock from "@components/TextBlock/TextBlock";
import { TextWithPicture } from "@components/TextWithPicture/TextWithPicture";
import useTranslation from "next-translate/useTranslation";
import mainImage from "../public/images/estudio.jpg";
import logo from "../public/images/logoLarge.png";
import header from "../public/images/musicLand.jpg";

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
      </PageLayout>
    </>
  );
};

export default Quienessomos;
