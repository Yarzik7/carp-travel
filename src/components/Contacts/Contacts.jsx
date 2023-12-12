import Section from "../Section";
import Title from "../Title/Title";
import ContactBlock from "./ContactBlock/ContactBlock";
import Form from "../Form/Form";
import Input from "../Form/Input/Input";
import { phones, emails, socials } from "@/data/contacts";
import css from "./Contacts.module.css";

const Contacts = () => {
  return (
    <Section sectionClasses={[css.contactsBgImg]}>
      <Title normalPart="Contact" boldPart="us" />
      <div className="flex flex-col gap-[12px] mt-[36px] md:gap-[64px] lg:flex-row lg:gap-[231px] lg:mt-[71px]">
        <address className="flex flex-col gap-[26px] mdOnly:flex-row md:gap-[90px]">
          <div className="flex flex-col gap-[24px] md:w-[322px]">
            <ContactBlock contactsList={phones} label="Phone number" />
            <ContactBlock contactsList={emails} label="E-mail" />
          </div>

          <div className="mdOnly:w-[292px]">
            <ContactBlock
              contactsList={socials}
              label="Follow us"
              className="beforeLg:flex-row-reverse"
              listClassName="mdOnly:text-left mdOnly:w-[80%]"
              labelClassName="mdOnly:w-[20%]"
            />
          </div>
        </address>
        <Form className="">
          <div className="flex flex-col gap-[24px] mdOnly:flex-row md:gap-[24px]">
            <div className="flex beforeLg:flex-col gap-[24px] md:w-[221px]">
              <Input label="Full name" name="name" placeholder="John Smith" />
              <Input
                label="E-mail"
                name="email"
                type="email"
                placeholder="johnsmith@email.com"
              />
            </div>
            <div className="mdOnly:w-[463px]">
              <Input label="Message" name="message" type="textarea" />
            </div>
          </div>
        </Form>
      </div>
    </Section>
  );
};

export default Contacts;
