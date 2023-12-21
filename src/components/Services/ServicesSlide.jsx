import Container from "../Container";
import Text from "../Text/Text";
import { title } from "../../data/services/services.json";
import Image from "next/image";

const ServicesSlide = ({
  service: { src, slogan, description, title },
  articleClasses,
}) => {
  return (
    <article
      className={[
        "section-background h-full pt-[202px] pb-[56px]",
        articleClasses,
      ].join(" ")}
    >
      <Container containerClasses="h-full">
        <h3 className="visually-hidden">{title}</h3>
        <Image
          src={src}
          alt={title}
          width={280}
          height={213}
          className="bg-gray h-[213px] fit-cover"
        />
        <p className="mt-[12px] text-[12px] text-right font-extralight leading-[2] tracking-[2.4px]">
          {slogan}
        </p>
        <div className="mt-auto">
          <Text normalText={description} />
        </div>
      </Container>
    </article>
  );
};

export default ServicesSlide;
