import Image from "next/image";
import HeroLogo from "../HeroLogo/HeroLogo";
import styles from "./Hero.module.css";

const Hero = (props) => {
  return (
    <>
      <div className={styles.bgWrap}>
        <Image
          alt="Tagorock Mundo Vertical - Escuela de Escalada en Las Palmas de Gran Canaria / Climbing School in Las Palmas de Gran Canaria"
          src={props.image}
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>
      <div className={styles.heroLogoCentered}>
        {props.logo ? (
          <HeroLogo 
          image={props.logo} 
          maxWidth={50} 
          minWidth={15} />
        ) : (
        <div className={styles.mainTitleWrapper}>
          <div className={styles.logoWrapper}>
            <Image
                src={props.logoPeq}
                layout="fill"
                objectFit="cover"
            />
          </div>
          <h1 className={styles.mainTitle}>{props.title}</h1>
        </div>
        )}
      </div>
    </>
  );
};

export default Hero;
