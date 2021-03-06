import Image from "next/image";
import styles from "./HeroLogo.module.css";
import { AnimatePresence, motion } from "framer-motion";

const HeroLogo = (props) => {
  return (
    <div className={styles.heroLogoWrap}>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
          className={styles.heroImageWrap}
        >
          <Image
            src={props.image}
            alt="Ratone's Room - Hero Banner"
            layout="responsive"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeroLogo;
