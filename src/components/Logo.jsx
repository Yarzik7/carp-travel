import Image from "next/image";
import logo from "../../public/Rectangle.png";

const Logo = () => {
  return (
    <div className="py-[36px] md:py-[24px]">
      <Image className="mb-[2px] w-[59px]" src={logo} alt="logo" />
      <p className="text-[14px] tracking-[2.59px] leading-none">CarpTravel</p>
    </div>
  );
};

export default Logo;
