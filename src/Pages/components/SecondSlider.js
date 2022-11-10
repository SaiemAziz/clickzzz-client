import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Autoplay } from "swiper";
import React from 'react';

const SecondSlider = () => {
    return (
        <div className="md:p-10 mx-20 md:mx-10 md:h-auto">
            <Swiper
        effect={"cards"}
        grabCursor={true}
        loop={true}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        modules={[EffectCards, Autoplay]}
        className="mySwiper h-full"
      >
        <SwiperSlide className="">
            <img className="border-8 border-double border-red-800 h-full rounded-2xl" src="https://images.unsplash.com/photo-1649183424680-464747a8e43d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="border-8 border-double border-red-800 h-full rounded-2xl" src="https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="border-8 border-double border-red-800 h-full rounded-2xl" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="border-8 border-double border-red-800 h-full rounded-2xl" src="https://images.unsplash.com/photo-1495216875107-c6c043eb703f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
        </SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default SecondSlider;

