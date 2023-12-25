import Icon from "../Icon/Icon";

const ServiceListItem = ({ service, setActiveSlide, activeSlide, index }) => {
  const handleActive = () => {
    setActiveSlide(index);
  };

  const isActive = activeSlide === index;

  return (
    <li>
      <button
        onClick={handleActive}
        className={`flex gap-[8px] items-center text-[20px] uppercase ${
          isActive ? "text-white" : "text-white/50"
        } font-extralight leading-[0.85] pointer-events-auto`}
      >
        {isActive && <Icon iconName="listMarker" size={6} />}
        {service}
      </button>
    </li>
  );
};

export default ServiceListItem;
