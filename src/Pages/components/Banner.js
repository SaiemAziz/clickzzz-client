import React from "react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper";

const Banner = () => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        }}

  return (
    <div>
      <>
        <Swiper
          effect={"cube"}
          grabCursor={true}
          loop={true}
          
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={pagination}
          modules={[EffectCube, Pagination]}
          className="mySwiper w-1/3"
        >
          <SwiperSlide>
            <img className="w-full" alt="" src="https://swiperjs.com/demos/images/nature-1.jpg" />
            <p className="h-10"></p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" alt="" src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" alt="" src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" alt="" src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Banner;
