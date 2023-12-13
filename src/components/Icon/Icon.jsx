import Image from "next/image";
import Sprite from "../../../public/images/sprite.svg";
import Error from "../../../public/images/error.svg";

const Icon = ({ iconName, size = 18 }) => {
  const Block = require("../../../public/images/sprite.svg");
  console.log(Sprite);
  return <Error />;
  //   return <Image src={`../../../public/images/sprite.svg#icon-${iconName}`} />;
  //   return (
  //     <svg width={size} height={size}>
  //       <use xlinkHref={error} />
  //     </svg>
  //   );
};

export default Icon;
