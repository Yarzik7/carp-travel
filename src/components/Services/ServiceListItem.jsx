import Icon from "../Icon/Icon";
import Link from "next/link";

const ServiceListItem = ({ service, active = false }) => {
  return (
    <li>
      <button
        className={`flex gap-[8px] items-center text-[20px] text-white${
          active ? "" : "/50"
        } font-extralight leading-[0.85]`}
      >
        {active && <Icon iconName="listMarker" size={6} />}
        {service}
      </button>
    </li>
  );
};

export default ServiceListItem;
