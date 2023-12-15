import Title from "../Title/Title";
import Section from "../Section";
import Text from "../Text/Text";
import { title, text, slogan } from "../../data/about/about.json";
import css from "./About.module.css";

const About = () => {
  return (
    <Section
      sectionClasses={[css.aboutBgImg]}
      containerClasses={["md:relative"]}
    >
      <Title
        normalPart={title[0]}
        boldPart={title[1]}
        className="md:absolute"
      />
      <div className="mt-[8px]">
        <div className="flex flex-col gap-[40px]">
          <div>
            <Text
              strongText={text[0].strong}
              normalText={text[0].normal}
              className="mb-[20px] w-[180px]"
            />
            <Text
              strongText={text[1].strong}
              normalText={text[1].normal}
              className="w-[180px]"
            />
          </div>

          <div className="w-[180px] self-end text-[14px] uppercase leading-[1.42]">
            <p>{slogan[0]}</p>
            <p className="text-right">{slogan[1]}</p>
            <p className="font-extralight -tracking-[0.14px] normal-case">
              {slogan[2]}
            </p>
          </div>
        </div>
        <Text
          strongText={text[2].strong}
          normalText={text[2].normal}
          className="w-full"
        />
      </div>
    </Section>
  );
};

export default About;
