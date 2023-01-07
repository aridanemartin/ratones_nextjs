import { ContactForm } from "@components/ContactForm/ContactForm";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";

export default function contacto() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>Ratone's Room | {t("meta:contact.title")}</title>
        <meta name="description" content={t("meta:contact.description")} />
      </Head>
      <ContactForm />
    </div>
  );
}
