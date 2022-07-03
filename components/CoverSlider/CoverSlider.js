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
import basilio from "../../public/images/drBasilio.webp";
import banddarra from "../../public/images/covers/Fran Peregrina - Manuela Canta Saetas (Producción Musical, Mezcla y Máster).webp";
import sandra from "../../public/images/covers/Sandra Bautista - Trapezista (Grabación de guitarras).webp";
import soviet from "../../public/images/covers/Frederico Vaninni - MABO (Máster & DDP).webp";

const CoverSlider = () => {
  return (
    <div className={styles.coverSliderWrapper}>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        navigation={true}
        modules={[Navigation, Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <Image
              src={sandra}
              layout="fill"
              objectFit="cover"
              alt="12 Cuerdas - Grupos que han grabado en Ratone's Room"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              src={soviet}
              layout="fill"
              objectFit="cover"
              alt="12 Cuerdas - Grupos que han grabado en Ratone's Room"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              src={banddarra}
              layout="fill"
              objectFit="cover"
              alt="Banddarra - Grupos que han grabado en Ratone's Room"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={basilio}
            layout="fill"
            objectFit="cover"
            alt="DR.BASILIO - Grupos que han grabado en Ratone's Room"
          />
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              src={daniel}
              layout="fill"
              objectFit="cover"
              alt="Daniel Felices - Grupos que han grabado en Ratone's Room"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              src={cuerdas}
              layout="fill"
              objectFit="cover"
              alt="12 Cuerdas - Grupos que han grabado en Ratone's Room"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CoverSlider;
