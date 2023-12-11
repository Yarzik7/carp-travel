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
      <address className="mt-[36px] flex flex-col gap-[26px]">
        <div className="flex flex-col gap-[24px]">
          <ContactBlock contactsList={phones} label="Phone number" />
          <ContactBlock contactsList={emails} label="E-mail" />
        </div>

        <ContactBlock
          contactsList={socials}
          label="Follow us"
          className=""
          listClassName=""
          labelClassName=""
        />
      </address>
      <Form className="flex flex-col gap-[24px]">
        <div className="flex flex-col gap-[24px]">
          <Input label="Full name" name="name" placeholder="John Smith" />
          <Input
            label="E-mail"
            name="email"
            type="email"
            placeholder="johnsmith@email.com"
          />
        </div>
        <Input label="Message" name="message" type="textarea" />
      </Form>
    </Section>
  );
};

export default Contacts;
