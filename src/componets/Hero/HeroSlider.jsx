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
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-navigation-size": "20px",
        }}
      >
        {heroData.map((slider) => {
          return (
            <SwiperSlide
              key={slider.id}
              className={`${slider.className} color-overlay`}
              style={{
                backgroundImage: `url(${slider.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "black",
              }}
            >
              <h2 className="text-center lg:text-4xl md:text-3xl font-bold bright-white sm:text-2xl">{slider.title}</h2>
              <p className="text-center text-2xl bright-white">{slider.description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
