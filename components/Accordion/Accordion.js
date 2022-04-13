import styles from './Accordion.module.css';
import { useState } from 'react';

const Accordion = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        if(!isOpen){setIsOpen(true)}else{setIsOpen(false)};
    };

    return (    

    <div className={styles.accordionWrap}>

        <div className={styles.accordionTitle}>
            <div className={styles.accordionQuestion}>
                <h3>{props.title}</h3>
            </div>
            <div className={styles.accordionArrow}>
                <svg
                onClick={toggle}
                className={styles.accordionToggle}
                aria-expanded={isOpen}
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor">
                    <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
        <p className={styles.accordionHiddenText} aria-expanded={!isOpen}>{props.text}</p>
        
    </div>

    


    );
}

export default Accordion;