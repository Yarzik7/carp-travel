import Image from "next/image";
import ServicesSlide from "./ServicesSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { title, services } from "../../data/services/services.json";
import {
  serviceTravelingBgImg,
  serviceClimbingBgImg,
  serviceBallooningBgImg,
  serviceSkydivingBgImg,
  serviceRaftingBgImg,
} from "./Services.module.css";

const servicesBg = [
  serviceTravelingBgImg,
  serviceClimbingBgImg,
  serviceBallooningBgImg,
  serviceSkydivingBgImg,
  serviceRaftingBgImg,
];

const ServicesSwiper = () => {
  return (
    <div className="services-swiper absolute top-[0] left-[0] w-full h-full z-[-1]">
      <Swiper wrapperTag="ul" className="h-full">
        {services.map((service, idx) => (
          <SwiperSlide key={service.id} tag="li">
            <ServicesSlide service={service} articleClasses={servicesBg[idx]} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServicesSwiper;
