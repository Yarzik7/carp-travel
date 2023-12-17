const Benefit = ({ title, description }) => {
  return (
    <li className="mb-[16px] text-right md:mb-[24px] lg:flex lg:gap-[24px] last:mb-[0]">
      <h3 className="leading-[1.42] md:leading-[1.25] md:text-[16px] lg:text-[18px] lg:leading-[1.33] beforeLg:mb-[8px]">
        {title}
      </h3>
      <p className="text-[12px] font-extralight leading-[1.66] lg:leading-[2]">
        {description}
      </p>
    </li>
  );
};

export default Benefit;
