"use client";
import Section from "../Section";
import ServicesSwiper from "./ServicesSwiper";
import Container from "../Container";
import ServiceListItem from "./ServiceListItem";
import Text from "../Text/Text";
import { title, servicesList } from "../../data/services/services.json";
import css from "./Services.module.css";
import Title from "../Title/Title";

const Services = () => {
  return (
    <Section withoutContainer sectionClasses="min-h-[821px] relative">
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
      <ServicesSwiper />
    </Section>
  );
};

export default Services;
