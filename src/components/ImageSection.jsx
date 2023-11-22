import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../src/swiper.css";

import { Parallax, Pagination, Navigation } from "swiper/modules";

export default function ImageSection() {
  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxOpacity = 5;
  const parallaxAmount = parallaxSwiper ? parallaxSwiper * 0.95  : 0;

  const handleSwiper = (swiper) => {
    setParallaxSwiper(swiper.width);
  };

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={500}
        centeredSlides={true}
        spaceBetween={0}
        slidesPerView={1}
        parallax={true}
        effect="silde"
        pagination={{
          clickable: true,
        }}
        onSwiper={handleSwiper}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="swiper"
        
      >
        <SwiperSlide>
          <div
            className="h-full slide-image"
            data-swiper-parallax={parallaxAmount}
            data-swiper-parallax-opacity={parallaxOpacity}
          >
            <img
              src="https://images.pexels.com/photos/19038743/pexels-photo-19038743/free-photo-of-a-person-walking-through-a-narrow-canyon.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
              alt="Description of the image"
              className="w-full h-full "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-full slide-image"
            data-swiper-parallax={parallaxAmount}
            data-swiper-parallax-opacity={parallaxOpacity}
          >
            <img
              src="https://images.pexels.com/photos/18968278/pexels-photo-18968278/free-photo-of-man-with-smartphone-and-bicycle-standing-in-corridor.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
              alt="Description of the image"
              className="w-full h-full "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-full slide-image"
            data-swiper-parallax={parallaxAmount}
            data-swiper-parallax-opacity={parallaxOpacity}
          >
            <img
              src="https://images.pexels.com/photos/18573390/pexels-photo-18573390/free-photo-of-man-in-jacket-walking-in-tunnel.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
              alt="Description of the image"
              className="w-full h-full "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-full slide-image"
            data-swiper-parallax={parallaxAmount}
            data-swiper-parallax-opacity={parallaxOpacity}
          >
            <img
              src="https://images.pexels.com/photos/18691539/pexels-photo-18691539/free-photo-of-sunlight-over-trees-in-forest.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
              alt="Description of the image"
              className="w-full h-full "
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
