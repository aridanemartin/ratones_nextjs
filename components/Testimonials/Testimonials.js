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
import leftCuote from "../../public/images/icons/left-quote.webp";
import useTranslation from "next-translate/useTranslation";

export default function Testimonials({
  image1,
  image2,
  image3,
  image4,
  image5,
}) {
  let { t } = useTranslation();

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
            <p className={styles.slideText}>{t("index:CARROUSEL.text1")}</p>
            <div className={styles.grupoWrap}>
              <div className={styles.profileImageFlex}>
                <div className={styles.profileImageWrap}>
                  <Image src={image1} layout="fill" objectFit="cover" />
                </div>
              </div>
              <div className={styles.textWrap}>
                <p className={styles.grupo}>{t("index:CARROUSEL.grupo1")}</p>
                <p className={styles.description}>
                  {t("index:CARROUSEL.desc1")}
                </p>
                <p className={styles.lugar}>{t("index:CARROUSEL.lugar1")}</p>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className={styles.cslide}>
            <div className={styles.imageWrap}>
              <Image src={leftCuote} layout="fill" objectFit="cover" />
            </div>
            <p className={styles.slideText}>{t("index:CARROUSEL.text2")}</p>
            <div className={styles.grupoWrap}>
              <div className={styles.profileImageFlex}>
                <div className={styles.profileImageWrap}>
                  <Image src={image2} layout="fill" objectFit="cover" />
                </div>
              </div>
              <div className={styles.textWrap}>
                <p className={styles.grupo}>{t("index:CARROUSEL.grupo2")}</p>
                <p className={styles.description}>
                  {t("index:CARROUSEL.desc2")}
                </p>
                <p className={styles.lugar}>{t("index:CARROUSEL.lugar2")}</p>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className={styles.cslide}>
            <div className={styles.imageWrap}>
              <Image src={leftCuote} layout="fill" objectFit="cover" />
            </div>
            <p className={styles.slideText}>{t("index:CARROUSEL.text3")}</p>
            <div className={styles.grupoWrap}>
              <div className={styles.profileImageFlex}>
                <div className={styles.profileImageWrap}>
                  <Image src={image3} layout="fill" objectFit="cover" />
                </div>
              </div>
              <div className={styles.textWrap}>
                <p className={styles.grupo}>{t("index:CARROUSEL.grupo3")}</p>
                <p className={styles.description}>
                  {t("index:CARROUSEL.desc3")}
                </p>
                <p className={styles.lugar}>{t("index:CARROUSEL.lugar3")}</p>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className={styles.cslide}>
            <div className={styles.imageWrap}>
              <Image src={leftCuote} layout="fill" objectFit="cover" />
            </div>
            <p className={styles.slideText}>{t("index:CARROUSEL.text4")}</p>
            <div className={styles.grupoWrap}>
              <div className={styles.profileImageFlex}>
                <div className={styles.profileImageWrap}>
                  <Image src={image4} layout="fill" objectFit="cover" />
                </div>
              </div>
              <div className={styles.textWrap}>
                <p className={styles.grupo}>{t("index:CARROUSEL.grupo4")}</p>
                <p className={styles.description}>
                  {t("index:CARROUSEL.desc4")}
                </p>
                <p className={styles.lugar}>{t("index:CARROUSEL.lugar4")}</p>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className={styles.cslide}>
            <div className={styles.imageWrap}>
              <Image src={leftCuote} layout="fill" objectFit="cover" />
            </div>
            <p className={styles.slideText}>{t("index:CARROUSEL.text5")}</p>
            <div className={styles.grupoWrap}>
              <div className={styles.profileImageFlex}>
                <div className={styles.profileImageWrap}>
                  <Image src={image5} layout="fill" objectFit="cover" />
                </div>
              </div>
              <div className={styles.textWrap}>
                <p className={styles.grupo}>{t("index:CARROUSEL.grupo5")}</p>
                <p className={styles.description}>
                  {t("index:CARROUSEL.desc5")}
                </p>
                <p className={styles.lugar}>{t("index:CARROUSEL.lugar5")}</p>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
