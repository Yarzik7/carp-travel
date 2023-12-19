import { gallery } from "../../data/gallery/gallery.json";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/keyboard";

const initialSlideIndex = 1;

const swiperGallery = [
  ...gallery,
  ...gallery.map((item) => ({ ...item, id: item.id + gallery.length })),
];

const GallerySwiper = () => {
  return (
    <Swiper
      wrapperTag="ul"
      effect={"coverflow"}
      initialSlide={initialSlideIndex}
      hashNavigation={true}
      navigation={true}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      spaceBetween={24}
      coverflowEffect={{
        rotate: 0,
        scale: 1,
        modifier: 1,
        slideShadows: true,
      }}
      loop={true}
      modules={[EffectCoverflow, Navigation]}
      className="gallery-swiper smOnly:hidden"
    >
      {swiperGallery.map(({ id, src, alt }) => (
        <SwiperSlide key={id} tag="li">
          <Image
            src={src}
            alt={alt}
            width={606}
            height={429}
            className="bg-cover w-[415px] h-[294px]"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default GallerySwiper;
