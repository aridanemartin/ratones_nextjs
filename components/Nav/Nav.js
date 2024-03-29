import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Locale from "../../components/Locale/Locale";
import styles from "./Nav.module.scss";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import useTranslation from "next-translate/useTranslation";

import ratonLogoDesktop from "../../public/images/logoLargeNoSubtitle.webp";
import ratonLogoMobile from "../../public/images/logoVertical.webp";
import Instagram from "../../public/images/icons/instagram.webp";
import Facebook from "../../public/images/icons/facebook.png";
import vimeo from "../../public/images/icons/vimeo.webp";
import youtube from "../../public/images/icons/youtube.webp";

const Nav = () => {
  let { t } = useTranslation();
  const size = useWindowSize();

  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  const [isOpen, setIsOpen] = useState(false);

  // Dropdown menu (mobile)
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  // Dropdown menu (desktop)
  const [serviciosOpen, setServiciosOpen] = useState(false);

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
          className={
            isOpen === false
              ? styles.burger
              : styles.burger + " " + styles.open + " " + styles.burgerOpen
          }
          id="burger"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          className={
            isOpen === false ? styles.nav : styles.nav + " " + styles.navOpen
          }
        >
          <div className={styles.logoSection}>
            <div>
              <Link href="/">
                <a className={styles.logoWrapper}>
                  <Image
                    src={ratonLogoDesktop}
                    placeholder="blur"
                    objectFit="contain"
                    layout="fill"
                    alt="Ratone's Studio Logo"
                  />
                </a>
              </Link>
            </div>
            <Locale />
          </div>
          <div className={styles.navLogoWrap}>
            <Link href="/">
              <Image
                src={ratonLogoMobile}
                placeholder="blur"
                layout="responsive"
                alt="Ratone's Studio Logo"
              />
            </Link>
          </div>

          <ul className={styles.navContent}>
            <li className={styles.navLinkWrap}>
              <Link href="/">
                <a
                  className={
                    (serviciosOpen ? styles.hideMenu : "") +
                    " " +
                    styles.navLink
                  }
                >
                  {/* Inicio */}
                  {t("common:menuText.4.name")}
                </a>
              </Link>
            </li>
            <li className={styles.navLinkWrap}>
              <Link href="/quienes-somos">
                <a
                  className={
                    (serviciosOpen ? styles.hideMenu : "") +
                    " " +
                    styles.navLink
                  }
                >
                  {/* Quienes somos */}
                  {t("common:menuText.0.name")}
                </a>
              </Link>
            </li>
            <li className={styles.navLinkWrap}>
              <a
                onClick={() => setServiciosOpen(!serviciosOpen)}
                className={
                  (serviciosOpen ? styles.hideMenu : "") + " " + styles.navLink
                }
              >
                {/* Servicios */}
                {t("common:menuText.1.name")}
              </a>
              {/* SERVICIOS (DROP DOWN)*/}
              <AnimatePresence>
                {serviciosOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={styles.dropdown}
                  >
                    <ul className={styles.dropDownMenu}>
                      <li>
                        <Link href="/servicios/produccion-musical">
                          <a>{t("common:servicios.0")}</a>
                        </Link>
                      </li>

                      <li>
                        <Link href="/servicios/guitarrista">
                          <a>{t("common:servicios.1")}</a>
                        </Link>
                      </li>

                      <li>
                        <Link href="/servicios/musica-para-audiovisuales">
                          <a>{t("common:servicios.2")}</a>
                        </Link>
                      </li>

                      <li>
                        <Link href="/servicios/mezcla-master">
                          <a>{t("common:servicios.3")}</a>
                        </Link>
                      </li>
                      <a
                        className={styles.goBackMobile}
                        onClick={() => setServiciosOpen(false)}
                      >
                        {t("common:buttonText.back")}
                      </a>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li className={styles.navLinkWrap}>
              <Link href="/contacto">
                <a
                  className={
                    (serviciosOpen ? styles.hideMenu : "") +
                    " " +
                    styles.navLink
                  }
                >
                  {/* Contacto */}
                  {t("common:menuText.2.name")}
                </a>
              </Link>
            </li>
            {/* <li className={styles.navLinkWrap}>
              <Link href="/contacto">
                <a
                  className={
                    (serviciosOpen ? styles.hideMenu : "") +
                    " " +
                    (styles.navLink + " " + styles.presupuesto)
                  }
                >
                  
                  {t("common:menuText.3.name")}
                </a>
              </Link>
            </li> */}
          </ul>

          <div className={styles.navSocialWrap}>
            <div
              className={
                isOpen === false
                  ? styles.socialBanner
                  : styles.socialBanner + " " + styles.socialBannerEffect
              }
            >
              <div className={styles.socialBannerLinkWrap}>
                <Link href="https://www.facebook.com/ratonesroom/">
                  <a className={styles.socialBannerLink} target="_blank">
                    <Image
                      src={Facebook}
                      layout="fixed"
                      width={33}
                      height={33}
                      alt="Facebook Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className={styles.socialBannerLinkWrap}>
                <Link href="https://www.instagram.com/ratonesroom/">
                  <a className={styles.socialBannerLink} target="_blank">
                    <Image
                      src={Instagram}
                      layout="fixed"
                      width={33}
                      height={33}
                      className={styles.socialBannerLink}
                      alt="Instagram Logo"
                    />
                  </a>
                </Link>
              </div>

              <div className={styles.socialBannerLinkWrap}>
                <Link href="https://www.youtube.com/channel/UCjOzjLGy6SeUs9VW2JJAQUA">
                  <a className={styles.socialBannerLink} target="_blank">
                    <Image
                      src={youtube}
                      layout="fixed"
                      width={35}
                      height={35}
                      // objectFit="contain"
                      className={styles.socialBannerLink}
                      alt="Victor Martinez - Youtube"
                    />
                  </a>
                </Link>
              </div>
              <div className={styles.socialBannerLinkWrap}>
                <Link href="https://vimeo.com/ratonesroom">
                  <a className={styles.socialBannerLink} target="_blank">
                    <Image
                      src={vimeo}
                      layout="fixed"
                      width={33}
                      height={33}
                      className={styles.socialBannerLink}
                      alt="Vimeo logo"
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
};

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
    if (typeof window !== "undefined") {
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
