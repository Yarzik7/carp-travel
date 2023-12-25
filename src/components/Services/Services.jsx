"use client";
import Section from "../Section";
import ServicesSwiper from "./ServicesSwiper";
import Container from "../Container";
import ServiceListItem from "./ServiceListItem";
import { title, servicesList } from "../../data/services/services.json";
import Title from "../Title/Title";
import { useState } from "react";

const Services = () => {
  const [swiper, setSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSwipeSlide = (index) => {
    setActiveSlide(index);
    swiper.slideTo(index);
  };

  return (
    <Section withoutContainer sectionClasses="py-[0px] min-h-[821px] relative">
      <div className="absolute top-[0] left-[0] z-[2] w-full h-full py-[56px] md:py-[64px] lg:py-[80px] pointer-events-none">
        <Container containerClasses="h-full">
          <Title normalPart={title[0]} boldPart={title[1]} />
          <div className="mt-[24px] uppercase">
            <p className="text-[43px] font-thin text-right">
              0{activeSlide + 1}/
              <span className="text-white/20">0{servicesList.length}</span>
            </p>
            <ul className="mt-[289px] flex flex-col gap-[16px]">
              {servicesList.map((service, idx) => (
                <ServiceListItem
                  key={idx}
                  service={service}
                  activeSlide={activeSlide}
                  setActiveSlide={handleSwipeSlide}
                  index={idx}
                />
              ))}
            </ul>
          </div>
        </Container>
      </div>

      <ServicesSwiper
        onInitSwiper={setSwiper}
        setActiveSlide={handleSwipeSlide}
      />
    </Section>
  );
};

export default Services;
