import React from "react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, EffectCoverflow } from "swiper";
import img1 from "../../images/beach.jpg";
import img2 from "../../images/flower.jpg";
import img3 from "../../images/ship.jpg";
import img4 from "../../images/fire.jpg";

const Banner = () => {
  return (
    <div className="bg-[#232426] relative bottom-32 text-white text-xl italic font-bold">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={"2"}
        // cubeEffect={{
        //   shadow: true,
        //   slideShadows: true,
        //   shadowOffset: 20,
        // }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          type: "fraction",
        }}
        modules={[EffectCoverflow]}
        className="mySwiper relative top-40 w-full tooltip tooltip-warning"
       data-tip="Swipe Me">
        <SwiperSlide>
          <img className="w-full" alt="" src={`https://i.ibb.co/n895DtC/fire.jpg`} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" alt="" src={`https://i.ibb.co/t2tV8cB/flower.jpg`} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" alt="" src={`https://i.ibb.co/TrbWS98/beach.jpg`} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" alt="" src={`https://i.ibb.co/nbwpFnJ/ship.jpg`} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
