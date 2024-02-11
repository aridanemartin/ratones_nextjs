import styles from "./CoverSlider.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

// import required modules
import { Scrollbar } from "swiper";
import Image from "next/image";
import cuerdas from "../../public/images/covers/12Cuerdas - (Producción musical _ Mastering).webp";
import daniel from "../../public/images/covers/Borja Remacha - Mi Primer Amor (Arreglos y Grabación de Guitarras).webp";
import dCoded from "../../public/images/covers/Perceptual Isolation.webp";
import banddarra from "../../public/images/covers/Fran Peregrina - Manuela Canta Saetas (Producción Musical, Mezcla y Máster).webp";
import sandra from "../../public/images/covers/Sandra Bautista - Trapezista (Grabación de guitarras).webp";
import frederico from "../../public/images/covers/Frederico Vaninni - MABO (Máster & DDP).webp";
import pectah from "../../public/images/covers/Pectah Adrift.webp";

const CoverSlider = () => {
  return (
    <div className={styles.coverSliderWrapper}>
      <Swiper
        scrollbar={{
          el: ".swiper-scrollbar",
          hide: true,
          enabled: false,
        }}
        navigation={true}
        modules={[Navigation, Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={sandra}
            layout="fill"
            objectFit="contain"
            alt="Sandra Bautista - Grupos que han grabado en Ratone's Room"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={pectah}
            layout="fill"
            objectFit="contain"
            alt="Pectah - Grupos que han grabado en Ratone's Room"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={frederico}
            layout="fill"
            objectFit="contain"
            alt="Frederico Vannini - Grupos que han grabado en Ratone's Room"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={banddarra}
            layout="fill"
            objectFit="contain"
            alt="Fran Peregrina - Grupos que han grabado en Ratone's Room"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={dCoded}
            layout="fill"
            objectFit="contain"
            alt="dCoded - Grupos que han grabado en Ratone's Room"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={daniel}
            layout="fill"
            objectFit="contain"
            alt="Borja Remacha - Grupos que han grabado en Ratone's Room"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={cuerdas}
            layout="fill"
            objectFit="contain"
            alt="12 Cuerdas - Grupos que han grabado en Ratone's Room"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CoverSlider;
