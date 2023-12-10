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
      <address className="mt-[36px]">
        <ContactBlock contactsList={phones} label="Phone number" />
        <ContactBlock contactsList={emails} label="E-mail" />
        <ContactBlock contactsList={socials} label="Follow us" rowReverse />
      </address>
      <Form>
        <Input label="Full name" name="name" placeholder="John Smith" />
        <Input
          label="E-mail"
          name="email"
          type="email"
          placeholder="johnsmith@email.com"
        />
        <Input label="Message" name="message" type="textarea" />
      </Form>
    </Section>
  );
};

export default Contacts;
