
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/scrollbar";
// import "swiper/css/navigation";

import styles from "./Testimonials.module.css";

// import required modules
import Image from "next/image";
import leftCuote from "../../public/images/left-quote.png";

export default function Testimonials(props) {
  return (
    <div className={styles.testimonialsWrapper}>
      <Swiper
        autoHeight={true}
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          // 1024: {
          //   slidesPerView: 3,
          //   spaceBetween: 20,
          // },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.mySwiper}
      >
        <SwiperSlide>
          <section className={styles.cslide}>
            <div className={styles.imageWrap}>
              <Image src={leftCuote} layout="fill" objectFit="cover" />
            </div>
            <p className={styles.slideText}>{props.text1}</p>
            <div className={styles.grupoWrap}>
              <div className={styles.profileImageFlex}>
                <div className={styles.profileImageWrap}>
                  <Image src={props.image1} layout="fill" objectFit="cover" />
                </div>
              </div>
              <div className={styles.textWrap}>
                <p className={styles.grupo}>{props.grupo1}</p>
                <p className={styles.description}>{props.desc1}</p>
                <p className={styles.lugar}>{props.lugar1}</p>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className={styles.cslide}>
            <div className={styles.imageWrap}>
              <Image src={leftCuote} layout="fill" objectFit="cover" />
            </div>
            <p className={styles.slideText}>{props.text2}</p>
            <div className={styles.grupoWrap}>
            <div className={styles.profileImageFlex}>
                <div className={styles.profileImageWrap}>
                  <Image src={props.image2} layout="fill" objectFit="cover" />
                </div>
              </div>
              <div className={styles.textWrap}>
                <p className={styles.grupo}>{props.grupo2}</p>
                <p className={styles.description}>{props.desc2}</p>
                <p className={styles.lugar}>{props.lugar2}</p>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className={styles.cslide}>
            <div className={styles.imageWrap}>
              <Image src={leftCuote} layout="fill" objectFit="cover" />
            </div>
            <p className={styles.slideText}>{props.text3}</p>
            <div className={styles.grupoWrap}>
            <div className={styles.profileImageFlex}>
                <div className={styles.profileImageWrap}>
                  <Image src={props.image3} layout="fill" objectFit="cover" />
                </div>
              </div>
              <div className={styles.textWrap}>
                <p className={styles.grupo}>{props.grupo3}</p>
                <p className={styles.description}>{props.desc3}</p>
                <p className={styles.lugar}>{props.lugar3}</p>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className={styles.cslide}>
            <div className={styles.imageWrap}>
              <Image src={leftCuote} layout="fill" objectFit="cover" />
            </div>
            <p className={styles.slideText}>{props.text4}</p>
            <div className={styles.grupoWrap}>
            <div className={styles.profileImageFlex}>
                <div className={styles.profileImageWrap}>
                  <Image src={props.image4} layout="fill" objectFit="cover" />
                </div>
              </div>
              <div className={styles.textWrap}>
                <p className={styles.grupo}>{props.grupo4}</p>
                <p className={styles.description}>{props.desc4}</p>
                <p className={styles.lugar}>{props.lugar4}</p>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
