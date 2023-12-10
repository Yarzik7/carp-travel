import Section from "../Section";
import Title from "../Title/Title";
import css from "./Contacts.module.css";

const Contacts = () => {
  return (
    <Section sectionClasses={[css.contactsBgImg]}>
      <Title normalPart="Contact" boldPart="us" />

      <div className="flex mt-[36px] gap-[20px] justify-end">
        <div>
          <p className="leading-[1.71]">+38 (098) 12 34 567</p>
          <p className="leading-[1.71]">+38 (073) 12 34 567</p>
        </div>

        <p className="text-[12px] font-extralight leading-[1.67]">
          Phone number
        </p>
      </div>
    </Section>
  );
};

export default Contacts;
