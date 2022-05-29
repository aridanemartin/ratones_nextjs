import HeroLogo from "@components/HeroLogo/HeroLogo";
import Image from "next/image";
import styles from "./Hero.module.css";
import logo from "../../public/images/logoLarge.png";

const Hero = (props) => {
  return (
    <div className={styles.mainTitleWrapper}>
      <div className={styles.bgWrap}>
        <Image
          alt="Background image"
          src={props.image}
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>
      <HeroLogo image={logo} maxWidth={"90"} minWidth={"10"} />
      <h1 className={styles.mainTitle}>{props.title}</h1>
    </div>
  );
};

export default Hero;
