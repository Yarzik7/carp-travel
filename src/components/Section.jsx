import Container from "./Container";

const Section = ({ sectionClasses=[], containerClasses, children }) => {
  const classNames = ["section", ...sectionClasses];

  return (
    <section className={classNames.join(" ")}>
      <Container containerClasses={containerClasses}>{children}</Container>
    </section>
  );
};

export default Section;
