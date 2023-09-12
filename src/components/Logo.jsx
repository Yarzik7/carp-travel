import Image from "next/image";
import logo from "../../public/Rectangle.png";

const Logo = () => {
  return (
    <div>
      <Image className="w-14" src={logo} alt="logo" />
      <span className="text-sm">CarpTravel</span>
    </div>
  );
};

export default Logo;
