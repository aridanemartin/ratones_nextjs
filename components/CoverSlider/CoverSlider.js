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
import cuerdas from "../../public/images/12cuerdas.png";
import daniel from "../../public/images/danielFelices.jpg";
import basilio from "../../public/images/drBasilio.jpg";
import banddarra from "../../public/images/banddarra.jpg";
import sandra from "../../public/images/sandraBautista.jpeg";
import soviet from "../../public/images/k-soviet.jpg";

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
                        objectFit="cover"
                        alt="12 Cuerdas - Grupos que han grabado en Ratone's Room"
                    />
                </div>
            </SwiperSlide>   
        </Swiper>
    </div>
    );
}
 
export default CoverSlider;