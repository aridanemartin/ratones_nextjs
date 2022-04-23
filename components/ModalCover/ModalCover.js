import styles from './ModalCover.module.css';
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion"



export default function ModalCover({ image, text, url, handleModalState, modalOpen }) {
  
  console.log(modalOpen);
  return (
    <AnimatePresence>
    {modalOpen && 
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.modalWrapper}
      >
        <div className={styles.modalImageWrapper}>
            <Image
                src={image}
                layout="fill"
                objectFit="cover"
            />
            <button onClick={handleModalState}>Cerrar</button>
            <p className={styles.modalText}>{text}</p>
            <iframe className={styles.modalSpotify}
            src={url} 
            width="100%" 
            height="80" 
            frameBorder="0" 
            allowFullScreen 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          
        </div>
    </motion.div>}
    
    </AnimatePresence>
  )
}
