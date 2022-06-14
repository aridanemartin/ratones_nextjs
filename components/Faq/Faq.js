import useTranslation from "next-translate/useTranslation";
import styles from "./Faq.module.css";
import { motion } from "framer-motion";
import Accordion from "../Accordion/Accordion";

const Faq = ({
  p1,
  r1,
  p2,
  r2,
  p3,
  r3,
  p4,
  r4,
  p5,
  r5,
  p6,
  r6,
  p7,
  r7,
  p8,
  r8,
  p9,
  r9,
  p10,
  r10,
}) => {
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
          <Accordion title={p1} text={r1} />
        </motion.li>
        <motion.li variants={item}>
          <Accordion title={p2} text={r2} />
        </motion.li>
        <motion.li variants={item}>
          <Accordion title={p3} text={r3} />
        </motion.li>
        <motion.li variants={item}>
          <Accordion title={p4} text={r4} />
        </motion.li>
        <motion.li variants={item}>
          <Accordion title={p5} text={r5} />
        </motion.li>
        {p6 && (
          <motion.li variants={item}>
            <Accordion title={p6} text={r6} />
          </motion.li>
        )}
        {p7 && (
          <motion.li variants={item}>
            <Accordion title={p7} text={r7} />
          </motion.li>
        )}
        {p9 && (
          <motion.li variants={item}>
            <Accordion title={p9} text={r9} />
          </motion.li>
        )}
        {p10 && (
          <motion.li variants={item}>
            <Accordion title={p10} text={r10} />
          </motion.li>
        )}
      </motion.ul>
    </div>
  );
};

export default Faq;
