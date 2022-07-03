import styles from "./InfiniteCarrousel.module.css";
import Image from "next/image";
import leftCuote from "../../public/images/left-quote.webp";

export default function InfiniteCarrousel(props) {
  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {/* los textos se duplican para crear el efecto  */}
        <section className={styles.cslide}>
          <div className={styles.imageWrap}>
            <Image src={leftCuote} layout="fill" objectFit="cover" />
          </div>
          <p className={styles.slideText}>{props.text1}</p>
          <div className={styles.grupoWrap}>
            <p className={styles.grupo}>{props.grupo1}</p>
            <p className={styles.description}>{props.desc1}</p>
            <p className={styles.lugar}>{props.lugar1}</p>
          </div>
        </section>
        <section className={styles.cslide}>
          <div className={styles.imageWrap}>
            <Image src={leftCuote} layout="fill" objectFit="cover" />
          </div>
          <p className={styles.slideText}>{props.text2}</p>
          <div className={styles.grupoWrap}>
            <p className={styles.grupo}>{props.grupo2}</p>
            <p className={styles.description}>{props.desc2}</p>
            <p className={styles.lugar}>{props.lugar2}</p>
          </div>
        </section>
        <section className={styles.cslide}>
          <div className={styles.imageWrap}>
            <Image src={leftCuote} layout="fill" objectFit="cover" />
          </div>
          <p className={styles.slideText}>{props.text3}</p>
          <div className={styles.grupoWrap}>
            <p className={styles.grupo}>{props.grupo3}</p>
            <p className={styles.description}>{props.desc3}</p>
            <p className={styles.lugar}>{props.lugar3}</p>
          </div>
        </section>
        <section className={styles.cslide}>
          <div className={styles.imageWrap}>
            <Image src={leftCuote} layout="fill" objectFit="cover" />
          </div>
          <p className={styles.slideText}>{props.text4}</p>
          <div className={styles.grupoWrap}>
            <p className={styles.grupo}>{props.grupo4}</p>
            <p className={styles.description}>{props.desc4}</p>
            <p className={styles.lugar}>{props.lugar4}</p>
          </div>
        </section>
        <section className={styles.cslide}>
          <div className={styles.imageWrap}>
            <Image src={leftCuote} layout="fill" objectFit="cover" />
          </div>
          <p className={styles.slideText}>{props.text1}</p>
          <div className={styles.grupoWrap}>
            <p className={styles.grupo}>{props.grupo1}</p>
            <p className={styles.description}>{props.desc1}</p>
            <p className={styles.lugar}>{props.lugar1}</p>
          </div>
        </section>
        <section className={styles.cslide}>
          <div className={styles.imageWrap}>
            <Image src={leftCuote} layout="fill" objectFit="cover" />
          </div>
          <p className={styles.slideText}>{props.text2}</p>
          <div className={styles.grupoWrap}>
            <p className={styles.grupo}>{props.grupo2}</p>
            <p className={styles.description}>{props.desc2}</p>
            <p className={styles.lugar}>{props.lugar2}</p>
          </div>
        </section>
        <section className={styles.cslide}>
          <div className={styles.imageWrap}>
            <Image src={leftCuote} layout="fill" objectFit="cover" />
          </div>
          <p className={styles.slideText}>{props.text3}</p>
          <div className={styles.grupoWrap}>
            <p className={styles.grupo}>{props.grupo3}</p>
            <p className={styles.description}>{props.desc3}</p>
            <p className={styles.lugar}>{props.lugar3}</p>
          </div>
        </section>
        <section className={styles.cslide}>
          <div className={styles.imageWrap}>
            <Image src={leftCuote} layout="fill" objectFit="cover" />
          </div>
          <p className={styles.slideText}>{props.text4}</p>
          <div className={styles.grupoWrap}>
            <p className={styles.grupo}>{props.grupo4}</p>
            <p className={styles.description}>{props.desc4}</p>
            <p className={styles.lugar}>{props.lugar4}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
