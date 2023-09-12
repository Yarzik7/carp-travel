import Section from "../Section";
import css from "./Hero.module.css";

const Hero = () => {
  return (
    <Section cssClasses={[css.heroSection, css.overlay]}>
      <div>
        <p>
          <span>7</span>Days
        </p>
        <p>Journey</p>
      </div>
      <h1>
        <span>Uncover</span> Carpathian’s Secrets
      </h1>
      <p>
        Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
      </p>
      <p>
        We offer you unforgettable trips to the most beautiful parts of the
        Carpathians. Enjoy stunning views, exciting expeditions, and the best
        service!
      </p>
      <button>Join now</button>
    </Section>
  );
};

export default Hero;
