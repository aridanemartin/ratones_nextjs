import useTranslation from "next-translate/useTranslation";
import styles from "./Faq.module.css";
import { motion } from "framer-motion";
import Accordion from "../Accordion/Accordion";

const Faq = () => {
  let { t } = useTranslation();

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.4,
      },
    },
  };

  const item = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <div className={styles.faqWrap}>
      <motion.ul initial="hidden" whileInView="visible" variants={list}>
        <h2 className={styles.faqTitle}>FAQ</h2>
        <motion.li variants={item}>
          <Accordion
            title={t("index:FAQ.title1")}
            text={t("index:FAQ.text1")}
          />
        </motion.li>
        <motion.li variants={item}>
          <Accordion
            title={t("index:FAQ.title2")}
            text={t("index:FAQ.text2")}
          />
        </motion.li>
        <motion.li variants={item}>
          <Accordion
            title={t("index:FAQ.title3")}
            text={t("index:FAQ.text3")}
          />
        </motion.li>
        <motion.li variants={item}>
          <Accordion
            title={t("index:FAQ.title4")}
            text={t("index:FAQ.text4")}
          />
        </motion.li>
        <motion.li variants={item}>
          <Accordion
            title={t("index:FAQ.title5")}
            text={t("index:FAQ.text5")}
          />
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default Faq;
