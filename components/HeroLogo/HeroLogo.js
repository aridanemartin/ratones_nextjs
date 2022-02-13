import Image from 'next/image';
import styles from './HeroLogo.module.css';
import { AnimatePresence, motion } from 'framer-motion';

const HeroLogo = (props) => {    
    return (    

        <div className={styles.heroLogoWrap}
            style={{maxWidth: props.maxWidth + 'rem', minWidth: props.minWidth + 'rem'}}
        
        >
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
                        alt="Tagorock - Mundo Vertical - Hero Banner" 
                        layout="responsive"
                        
                        />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default HeroLogo;