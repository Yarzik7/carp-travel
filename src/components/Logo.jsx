import Image from "next/image";
import logo from "../../public/Rectangle.png";

const Logo = () => {
  return (
    <div>
      <Image src={logo} alt="logo" />
      <span>CarpTravel</span>
    </div>
  );
};

export default Logo;
