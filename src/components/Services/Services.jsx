import Section from "../Section";
import Container from "../Container";
import Title from "../Title/Title";
import Text from "../Text/Text";
import { title } from "../../data/services/services.json";
import css from "./Services.module.css";

const Services = () => {
  return (
    <Section withoutContainer sectionClasses="relative">
      <Title
        normalPart={title[0]}
        boldPart={title[1]}
        className="absolute top-[56px] left-[20px]"
      />
    </Section>
  );
};

export default Services;
