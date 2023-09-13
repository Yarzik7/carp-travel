import Section from "../Section";
import css from "./Hero.module.css";

const Hero = () => {
  return (
    <Section
      sectionClasses={[css.heroSection, css.overlay]}
      containerClasses={["relative pt-[76px]"]}
    >
      <div className="absolute top-[0px] right-[20px] uppercase leading-none">
        <p className="text-37px font-thin tracking-1.65px leading-none">
          <span className="font-medium leading-none">7</span>Days
        </p>
        <p className="font-light text-12px tracking-9.48px leading-none">
          Journey
        </p>
      </div>
      <div className="mb-[24px]">
        <h1 className="mb-[24px] font-thin -tracking-[1.6px] uppercase text-40px">
          <span className="font-medium">Uncover</span> Carpathian’s Secrets
        </h1>
        <p className="w-[165px] text-10px font-extralight leading-1.6">
          Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
        </p>
      </div>
      <div className="w-full">
        <p className="mb-[24px] text-justify text-14px font-extralight leading-1.4">
          We offer you unforgettable trips to the most beautiful parts of the
          Carpathians. Enjoy stunning views, exciting expeditions, and the best
          service!
        </p>
        <button className="uppercase text-18px flex justify-center items-center font-bold w-full h-53px bg-bgButton">
          Join now
        </button>
      </div>
    </Section>
  );
};

export default Hero;
