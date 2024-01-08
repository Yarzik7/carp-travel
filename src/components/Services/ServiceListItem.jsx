import Icon from "../Icon/Icon";
import { services } from "../../data/services/services.json";

const ServiceListItem = ({ service, setActiveSlide, activeSlide, index }) => {
  const handleActive = () => {
    setActiveSlide(index);
  };

  const isActive = activeSlide === index;

  return (
    <li className="lg:flex lg:gap-[60px] hover:scale-[1.2]">
      <button
        onClick={handleActive}
        className={`w-[185px] flex gap-[8px] items-center text-[20px] text-left uppercase ${
          isActive ? "text-white font-medium" : "text-white/50"
        } font-extralight leading-[0.85] pointer-events-auto md:w-[210px] md:text-[22px] md:leading-[0.81] lg:w-[255px] lg:text-[28px]`}
      >
        {isActive && <Icon iconName="listMarker" size={6} />}
        {service}
      </button>
    </li>
  );
};

export default ServiceListItem;
