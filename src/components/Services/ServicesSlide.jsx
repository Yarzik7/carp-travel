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
        "section-background h-full pt-[202px] pb-[56px] md:pt-[182px]",
        articleClasses,
      ].join(" ")}
    >
      <Container containerClasses="h-full md:flex justify-between">
        <h3 className="visually-hidden">{title}</h3>
        <Image
          src={src}
          alt={title}
          width={280}
          height={213}
          className="bg-gray h-[213px] fit-cover md:w-[463px] md:h-[370px]"
        />
        <div className="min-h-[358px] flex flex-col justify-between mt-[12px]">
          <p className="text-[12px] text-right font-extralight leading-[2] tracking-[2.4px]">
            {slogan}
          </p>

          <Text normalText={description} className="mt-auto" />
        </div>
      </Container>
    </article>
  );
};

export default ServicesSlide;
