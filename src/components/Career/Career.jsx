import Section from "../Section";
import Title from "../Title/Title";
import Text from "../Text/Text";
import { title, benefits, slogan } from "../../data/career/career.json";
import css from "./Career.module.css";

const Career = () => {
  return (
    <Section sectionClasses={css.careerBgImg}>
      <div className="">
        <Title normalPart={title[0]} boldPart={title[1]} />
        <Text
          normalText={slogan}
          className="w-[179px] ml-auto smOnly:mt-[24px]"
        />
      </div>
    </Section>
  );
};

export default Career;
