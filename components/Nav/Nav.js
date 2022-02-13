import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import Locale from '../../components/Locale/Locale';
import styles from './Nav.module.css';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';


import Logo from '../../public/images/logoVertical.png';
import Instagram from '../../public/images/instagram.webp';
import Facebook from '../../public/images/facebook.webp';
import Web from '../../public/images/corchea.png';

const Nav = () => {

    let { t } = useTranslation();
    const size = useWindowSize();

    const router = useRouter();
    const { locale, locales, defaultLocale } = router

    const[isOpen, setIsOpen] = useState(false);
    // Dropdown menu
    const[open, setOpen] = useState(false);
    // Dropdown menu (mobile)
    const[serviciosOpen, setServiciosOpen] = useState(false);


    const toggle = () => setIsOpen(!isOpen);

    return ( 
    <>    
    
    {/* Size Debugging!
    <div>
        {size.width}px / {size.height}px
    </div>
     */}
        <nav className={styles.navWrap}>
            <button 
            onClick={toggle} 
            className={isOpen === false ? styles.burger : styles.burger + ' ' + styles.open + ' ' + styles.burgerOpen}
            id="burger"
            >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={isOpen === false ? styles.nav : styles.nav + ' ' + styles.navOpen}>
                
                <Locale/>
                <div className={isOpen === false ? styles.navLogoWrap : styles.navLogoWrap + ' ' + styles.navLogoWrapEffect}>
                    <Image
                        src={Logo}
                        placeholder="blur"
                        layout="responsive"
                        width={1412}
                        height={690}
                        alt="Ratone's Studio Logo"
                    ></Image>
                </div>
                <ul className={styles.navContent}>
                    <li className={isOpen === false ? styles.navLinkWrap : styles.navLinkWrap + ' ' + styles.navLinkWrap1}>
                        <Link 
                        href="/"
                        >
                            <a className={(serviciosOpen ? styles.hideMenu : '') + ' ' + (styles.navLink)}>{t('common:menuText.0.name')}</a>
                        </Link>
                    </li>
                    <li className={isOpen === false ? styles.navLinkWrap : styles.navLinkWrap + ' ' + styles.navLinkWrap2}>
                        <Link 
                        href="/"
                        >
                            <a className={(serviciosOpen ? styles.hideMenu : '') + ' ' + (styles.navLink)}>{t('common:menuText.1.name')}</a>
                        </Link>
                    </li>
                    <li className={isOpen === false ? styles.navLinkWrap : styles.navLinkWrap + ' ' + styles.navLinkWrap3}>
                        <Link 
                        href="/rocodromo"
                        >
                            <a className={(serviciosOpen ? styles.hideMenu : '') + ' ' + (styles.navLink)}>{t('common:menuText.2.name')}</a>
                        </Link>  
                    </li>
                    <li className={isOpen === false ? styles.navLinkWrap : styles.navLinkWrap + ' ' + styles.navLinkWrap4}>
                        <Link 
                        href="/contacto"
                        >
                            <a className={(serviciosOpen ? styles.hideMenu : '') + ' ' + (styles.navLink)}>{t('common:menuText.3.name')}</a>
                        </Link>
                    </li>
                    <li className={isOpen === false ? styles.navLinkWrap : styles.navLinkWrap + ' ' + styles.navLinkWrap5}>
                        <Link 
                        href="/contacto"
                        >
                            <a className={(serviciosOpen ? styles.hideMenu : '') + ' ' + (styles.navLink)}>{t('common:menuText.4.name')}</a>
                        </Link>
                    </li>
                    <li className={isOpen === false ? styles.navLinkWrap : styles.navLinkWrap + ' ' + styles.navLinkWrap6}>
                        <Link 
                        href="/contacto"
                        >
                            <a className={(serviciosOpen ? styles.hideMenu : '') + ' ' + (styles.navLink + ' ' + styles.presupuesto)}>{t('common:menuText.5.name')}</a>
                        </Link>
                    </li>
                </ul>

                <div className={styles.navSocialWrap}>
                
                <div className={isOpen === false ? styles.socialBanner : styles.socialBanner + ' ' + styles.socialBannerEffect}>
                    <div className={styles.socialBannerLinkWrap}>
                        <Link 
                        href="https://www.instagram.com/tagorockmundovertical/?hl=es"
                        >
                            <a className={styles.socialBannerLink} target="_blank">
                                <Image 
                                src={Instagram}
                                layout="fixed"
                                width={35}
                                height={35}
                                className={styles.socialBannerLink}
                                alt="Instagram Logo"
                                />
                            </a>       
                        </Link>
                    </div>
                    <div className={styles.socialBannerLinkWrap}>
                        <Link 
                        href="https://www.facebook.com/sala.tagorock"
                        >
                            <a className={styles.socialBannerLink} target="_blank">
                                <Image 
                                src={Facebook}
                                layout="fixed"
                                width={40}
                                height={40}
                                alt="Facebook Logo"
                                />
                            </a>       
                        </Link>
                    </div>
                    <div className={styles.socialBannerLinkWrap}>
                        <Link 
                        href="https://www.youtube.com/channel/UCp71gyByJMd82XcQZmWi2HQ/videos"
                        >
                            <a className={styles.socialBannerLink} target="_blank">
                                <Image 
                                src={Web}
                                layout="fixed"
                                width={40}
                                height={40}
                                className={styles.socialBannerLink}
                                alt="Web Logo"
                                />
                            </a>       
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        </nav>
    </>
    );
}

export default Nav;

 // Hook
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // only execute all the code below in client side
        if (typeof window !== 'undefined') {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
            });
        }
        
        // Add event listener
        window.addEventListener("resize", handleResize);
        
        // Call handler right away so state gets updated with initial window size
        handleResize();
        
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
        }
    }, []);
    // Empty array ensures that effect is only run on mount
    return windowSize;
}