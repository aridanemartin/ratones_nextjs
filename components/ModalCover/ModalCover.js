import styles from './ModalCover.module.css';
import Image from 'next/image'
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"



export default function ModalCover({ image, handleModalState, modalOpen }) {
  
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
            <button onClick={handleModalState}>lalala</button>
        </div>
    </motion.div>}
    
    </AnimatePresence>
  )
}
