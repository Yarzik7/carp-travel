import Container from "./Container";

const Section = ({ sectionClasses = [], containerClasses, children }) => {
  return (
    <section
      className={`section-background py-[56px] md:py-[64px] lg:py-[80px] ${sectionClasses.join(
        " "
      )}`}
    >
      <Container containerClasses={containerClasses}>{children}</Container>
    </section>
  );
};

export default Section;
