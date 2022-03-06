import React, { useRef, useState } from "react";
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
import cuerdas from "../../public/images/12cuerdas.jpg";
import daniel from "../../public/images/danielFelices.jpg";
import basilio from "../../public/images/drBasilio.jpg";
import banddarra from "../../public/images/banddarra.jpg";

const CoverSlider = () => {
    return (  
    <div>
        <Swiper
            scrollbar={{
            hide: true,
            }}
            navigation={true} 
            modules={[Navigation, Scrollbar]}
            
            className="mySwiper"
        >
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
                        src={banddarra}
                        layout="fill"
                        objectFit="cover"
                        alt="Banddarra - Grupos que han grabado en Ratone's Room"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <Image
                        src={cuerdas}
                        layout="fill"
                        objectFit="contain"
                        alt="12 Cuerdas - Grupos que han grabado en Ratone's Room"
                    />
                </div>
            </SwiperSlide>
            
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
    </div>
    );
}
 
export default CoverSlider;