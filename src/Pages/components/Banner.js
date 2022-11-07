import React from "react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper";
import img1 from "../../images/beach.jpg";
import img2 from "../../images/flower.jpg";
import img3 from "../../images/ship.jpg";
import img4 from "../../images/fire.jpg";

const Banner = () => {
  return (
    <div className="bg-[#232426] relative bottom-32 text-white text-xl italic rounded-b-[300px] font-bold">
      <Swiper
        effect={"cube"}
        grabCursor={true}
        loop={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
        }}
        pagination={{
          type: "fraction",
        }}
        modules={[EffectCube, Pagination]}
        className="mySwiper relative top-40 w-1/2 "
      >
        <SwiperSlide>
          <img className="w-full" alt="" src={img4} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" alt="" src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" alt="" src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" alt="" src={img3} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
