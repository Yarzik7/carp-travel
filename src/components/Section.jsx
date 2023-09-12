import Container from "./Container";

const Section = ({ cssClasses=[], children }) => {
  const classNames = ["section", ...cssClasses];

  return (
    <section className={classNames.join(" ")}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
