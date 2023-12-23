"use client";
import Section from "../Section";
import ServicesSwiper from "./ServicesSwiper";
import Container from "../Container";
import ServiceListItem from "./ServiceListItem";
import Text from "../Text/Text";
import { title, servicesList } from "../../data/services/services.json";
import css from "./Services.module.css";
import Title from "../Title/Title";
import { useState } from "react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const Services = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <Section withoutContainer sectionClasses="py-[0] min-h-[821px] relative">
      <div className="absolute top-[0] left-[0] z-[2] w-full h-full py-[56px] md:py-[64px] lg:py-[80px] pointer-events-none">
        <Container containerClasses="h-full">
          <Title normalPart={title[0]} boldPart={title[1]} />
          <div className="mt-[24px] uppercase">
            <p className="text-[43px] font-thin text-right">
              0{0}/<span className="text-white/20">0{servicesList.length}</span>
            </p>
            <ul className="mt-[289px] flex flex-col gap-[16px]">
              {servicesList.map((service, idx) => (
                <ServiceListItem key={idx} service={service} />
              ))}
            </ul>
          </div>
        </Container>
      </div>

      <ServicesSwiper />
    </Section>
  );
};

export default Services;
