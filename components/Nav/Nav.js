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
import Facebook from "../../public/images/icons/facebook.webp";
import Web from "../../public/images/icons/corchea.webp";

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
            <Image
              src={ratonLogoMobile}
              placeholder="blur"
              layout="responsive"
              alt="Ratone's Studio Logo"
            />
          </div>

          <ul className={styles.navContent}>
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
                        Atrás
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
            <li className={styles.navLinkWrap}>
              <Link href="/contacto">
                <a
                  className={
                    (serviciosOpen ? styles.hideMenu : "") +
                    " " +
                    (styles.navLink + " " + styles.presupuesto)
                  }
                >
                  {/* Pide tu presupuesto */}
                  {t("common:menuText.3.name")}
                </a>
              </Link>
            </li>
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
                <Link href="https://www.instagram.com/tagorockmundovertical/?hl=es">
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
                <Link href="https://www.facebook.com/sala.tagorock">
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
                <Link href="https://www.youtube.com/channel/UCp71gyByJMd82XcQZmWi2HQ/videos">
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
