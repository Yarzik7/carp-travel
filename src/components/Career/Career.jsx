import Section from "../Section";
import Title from "../Title/Title";
import Text from "../Text/Text";
import Benefit from "./Benefit";
import { title, benefits, slogan } from "../../data/career/career.json";
import css from "./Career.module.css";

const Career = () => {
  return (
    <Section sectionClasses={css.careerBgImg}>
      <div className="md:flex justify-between">
        <Title normalPart={title[0]} boldPart={title[1]} />
        <Text
          normalText={slogan}
          className="w-[179px] ml-auto smOnly:mt-[24px] md:w-[221px] md:pt-[8px] md:text-justify lg:pt-[16px] lg:w-[293px]"
        />
      </div>

      <div className="mt-[36px]">
        <p className="mb-[45px] pl-[100px] text-[30px] font-extralight uppercase md:pl-[80px] lg:pl-[123px] lg:text-[36px] lg:leading-[1.08]">
          Why us ?
        </p>
        <ul className="w-[181px] md:w-[221px] lg:w-full">
          {benefits.map(({ title, description }, idx) => (
            <Benefit key={idx} title={title} description={description} />
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Career;
