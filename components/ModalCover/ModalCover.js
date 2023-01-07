import styles from "./ModalCover.module.css";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import useTranslation from "next-translate/useTranslation";

export default function ModalCover({
  image,
  title,
  artist,
  text,
  url,
  handleModalState,
  modalOpen,
}) {
  let { t } = useTranslation();

  return (
    <AnimatePresence>
      {modalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles.modalWrapper}
        >
          <div className={styles.contentWrapper}>
            <div className={styles.modalImage}>
              <Image
                src={image}
                layout="fill"
                objectFit="cover"
                alt="Cover Image"
              />
            </div>
            <h2>{title}</h2>
            <p className={styles.artist}>{artist}</p>
            <p className={styles.modalText}>{text}</p>
            <iframe
              className={styles.modalSpotify}
              src={url}
              width="100%"
              height="80"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
            <button onClick={handleModalState}>
              {t("common:buttonText.close")}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
