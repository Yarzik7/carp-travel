import Image from "next/image";
import ServicesSlide from "./ServicesSlide";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import { title, services } from "../../data/services/services.json";
import {
  serviceTravelingBgImg,
  serviceClimbingBgImg,
  serviceBallooningBgImg,
  serviceSkydivingBgImg,
  serviceRaftingBgImg,
} from "./Services.module.css";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { useState } from "react";

const servicesBg = [
  serviceTravelingBgImg,
  serviceClimbingBgImg,
  serviceBallooningBgImg,
  serviceSkydivingBgImg,
  serviceRaftingBgImg,
];

const ServicesSwiper = ({ setActiveSlide, onInitSwiper }) => {
  // const [state, setState] = useState(null);
  // console.log(state.on);
  return (
    <div className="services-swiper">
      <Swiper
        wrapperTag="ul"
        slidesPerView={1}
        effect="fade"
        modules={[EffectFade]}
        onSwiper={onInitSwiper}
        onSlideChange={(e) => setActiveSlide(e.activeIndex)}
        className="h-full"
      >
        {services.map((service, idx) => (
          <SwiperSlide key={service.id} tag="li">
            <ServicesSlide service={service} articleClasses={servicesBg[idx]} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
// absolute top-[0] left-[0] w-full h-full
export default ServicesSwiper;
