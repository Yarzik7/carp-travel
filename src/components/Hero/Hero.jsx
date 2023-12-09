import Section from "../Section";
import css from "./Hero.module.css";

const Hero = () => {
  return (
    <Section sectionClasses={[css.heroSection, css.heroBgImg]}>
      <div className="w-full h-full md:relative md:flex justify-between">
        <div className="mb-[24px] text-right uppercase md:absolute top-[0px] right-[20px]  ">
          <p className="text-37px font-thin tracking-1.65px leading-none">
            <span className="font-medium leading-none">7</span>Days
          </p>
          <p className="max-w-[295px] font-light text-12px tracking-[9.48px] leading-none md:tracking-[25.9px] lg:tracking-[36.48px]">
            Journey
          </p>
        </div>

        <div className="flex flex-col gap-[24px] mb-[24px]">
          <h1 className="font-thin -tracking-[1.6px] uppercase text-[40px] md:mb-[68px] md:w-[426px] md:text-[67px] lg:mb-[148px] lg:w-[646px] lg:text-[98px]">
            <span className="font-medium">Uncover</span> Carpathian’s Secrets
          </h1>

          <p className="w-[59%] text-[10px] font-extralight leading-1.6 md:w-[62%] md:text-[14px] md:leading-[1.14] md:tracking-[1.26px] lg:w-[100%] lg:text-[16px] lg:leading-[1.5] lg:tracking-[1.44px]">
            Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
          </p>
        </div>

        {/* <div className="w-full self-end md:w-[230px] lg:[294px]">
          <p className="mb-[24px] text-justify font-extralight leading-[1.42]">
            We offer you unforgettable trips to the most beautiful parts of the
            Carpathians. Enjoy stunning views, exciting expeditions, and the
            best service!
          </p>
          <button className="uppercase text-18px flex justify-center items-center font-bold w-full h-53px bg-bgButton">
            Join now
          </button>
        </div> */}
      </div>
    </Section>
  );
};

export default Hero;
