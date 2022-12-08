import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { heroData } from "./HeroData";

import { Navigation, Autoplay, Lazy } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const HeroSlider = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Autoplay, Lazy]}
        lazy={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        navigation={true}
        loop={true}
       /*  className="h-4/6 overflow-hidden flex flex-nowrap text-center" */
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-navigation-size": "20px",
        }}
      >
        {heroData.map((slider) => {
          return (
            <SwiperSlide key={slider.id} className={slider.className}>
              <h2 className="text-4xl max-w-md">{slider.title}</h2>
              <p className="max-w-md">{slider.description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>






    </div>
  );
};

export default HeroSlider;
