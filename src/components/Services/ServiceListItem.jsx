import Icon from "../Icon/Icon";

const ServiceListItem = ({ service, active = false }) => {
  return (
    <li>
      <button
        onClick={() => console.log("click")}
        className={`flex gap-[8px] items-center text-[20px] text-white${
          active ? "" : "/50"
        } font-extralight leading-[0.85] pointer-events-auto`}
      >
        {active && <Icon iconName="listMarker" size={6} />}
        {service}
      </button>
    </li>
  );
};

export default ServiceListItem;
