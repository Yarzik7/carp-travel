"use client";
import Section from "../Section";
import Title from "../Title/Title";
import GalleryImg from "./GalleryImg";
import { title, gallery } from "../../data/gallery/gallery.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import css from "./Gallery.module.css";

const Gallery = () => {
  return (
    <Section sectionClasses={css.galleryBgImg}>
      <Title normalPart={title[0]} boldPart={title[1]} />
      <div className="mt-[24px] md:mt-[72px] lg:mt-[25px]">
        <ul>
          {gallery.map(({ id, src, alt }) => (
            <GalleryImg key={id} src={src} alt={alt} />
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Gallery;
