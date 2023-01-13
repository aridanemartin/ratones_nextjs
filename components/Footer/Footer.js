import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";

import ratonesLogo from "../../public/images/logoLarge.webp";
import useTranslation from "next-translate/useTranslation";
import americanExpress from "../../public/images/cards/americanExpress.webp";
import visa from "../../public/images/cards/visa.webp";
import mastercard from "../../public/images/cards/masterCard.webp";
import discover from "../../public/images/cards/discover.webp";
import maestro from "../../public/images/cards/maestro.webp";
import payPal from "../../public/images/cards/payPal.webp";
import bizum from "../../public/images/cards/bizum.webp";

export default function Footer() {
  let { t } = useTranslation();

  return (
    <div className={styles.footerWrap}>
      <div className={styles.footerContentWrap}>
        <div className={styles.menuWrap}>
          <h3>Ratone's Room</h3>
          <ul className={styles.menuContent}>
            <li>
              <Link href="/">
                <a>{t("common:menuText.4.name")}</a>
              </Link>
            </li>
            <li>
              <Link href="/quienes-somos">
                <a>{t("common:menuText.0.name")}</a>
              </Link>
            </li>
            <li>
              <Link href="/#servicios">
                <a>{t("common:menuText.1.name")}</a>
              </Link>
            </li>
            <li>
              <Link href="/contacto">
                <a>{t("common:menuText.2.name")}</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.payments}>
          <h3>{t("common:footer.payments")}</h3>
          <ul className={styles.paymentsContent}>
            <li>
              <Image
                src={visa}
                layout="fill"
                objectFit="cover"
                alt="Visa credit card"
              />
            </li>
            <li>
              <Image
                src={mastercard}
                layout="fill"
                objectFit="cover"
                alt="Mastercard credit card"
              />
            </li>
            <li>
              <Image
                src={americanExpress}
                layout="fill"
                objectFit="cover"
                alt="American Express credit card"
              />
            </li>
            <li>
              <Image
                src={discover}
                layout="fill"
                objectFit="cover"
                alt="Discover credit card"
              />
            </li>
            <li>
              <Image
                src={maestro}
                layout="fill"
                objectFit="cover"
                alt="Maestro credit card"
              />
            </li>
            <li>
              <Image
                src={payPal}
                layout="fill"
                objectFit="cover"
                alt="PayPal credit card"
              />
            </li>
            <li>
              <Image
                src={bizum}
                layout="fill"
                objectFit="cover"
                alt="Bizum credit card"
              />
            </li>
          </ul>
        </div>
        <div className={styles.socialWrapper}>
          <div className={styles.logoWrap}>
            <Image
              src={ratonesLogo}
              layout="responsive"
              quality="50"
              priority="true"
              as="image"
            />
          </div>
          <div className={styles.socialContainer}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/ratonesroom/"
              className={styles.socialIcon}
            >
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="100%"
                height="100%"
              >
                {" "}
                <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z" />
              </svg>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/ratonesroom/"
              className={styles.socialIcon}
            >
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="100%"
                height="100%"
              >
                {" "}
                <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" />
              </svg>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/channel/UCjOzjLGy6SeUs9VW2JJAQUA"
              className={styles.socialIcon}
            >
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="100%"
                height="100%"
              >
                <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z" />
              </svg>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://vimeo.com/ratonesroom"
              className={styles.socialIcon}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="80%"
                height="80%"
              >
                <path d="M0 0v24h24v-24h-24zm19.249 10.732c-1.628 3.478-5.558 8.213-8.042 8.213-2.448 0-2.802-5.221-4.139-8.696-.658-1.709-1.083-1.317-2.316-.454l-.752-.97c1.798-1.581 3.599-3.418 4.705-3.52 1.245-.12 2.012.731 2.299 2.554.379 2.396.908 6.114 1.832 6.114.72 0 2.494-2.95 2.585-4.004.162-1.544-1.135-1.591-2.261-1.109 1.781-5.836 9.194-4.761 6.089 1.872z" />
              </svg>
            </a>
          </div>
          <Link href="/contacto">
            <a className={styles.mapWrapper}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10826.461571389951!2d-3.6872770522070377!3d40.40723137071332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42278f7c2b90b7%3A0xd3c275e76a14fa94!2sRatone&#39;s%20Room!5e0!3m2!1sen!2ses!4v1662925019950!5m2!1sen!2ses"
                width="100%"
                height="100%"
                loading="lazy"
              ></iframe>
            </a>
          </Link>
        </div>
        <div className={styles.serviciosWrap}>
          <h3>{t("common:menuText.1.name")}</h3>
          <ul className={styles.menuContent}>
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
          </ul>
        </div>
      </div>
      <div className={styles.legal}>
        <Link href="/legal/politica-de-cookies">
          <a>Política de Cookies</a>
        </Link>
        <Link href="/legal/politica-de-privacidad">
          <a>Política de Privacidad</a>
        </Link>
        <Link href="/legal/aviso-legal">
          <a>Aviso Legal</a>
        </Link>
      </div>
    </div>
  );
}
