import css from "./Navigation.module.css";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const navList = [
  { caption: "About", href: "#about" },
  { caption: "Services", href: "#services" },
  { caption: "Career", href: "#career" },
  { caption: "Gallery", href: "#gallery" },
  { caption: "Contacts", href: "#contacts" },
];

// const renderNav = ({ caption, href }, idx) => {
//   return (
//     <li key={idx} className="">
//       <Link href={href} className="py-[34px]">
//         {caption}
//       </Link>
//     </li>
//   );
// };

const Navigation = ({
  className = "",
  listClassName = "",
  listItemClassName = "",
  linkClassName = "",
  onLinkClick
}) => {
  return (
    <nav className={twMerge("", className)}>
      <ul className={twMerge("flex gap-[24px] lg:gap-[56px]", listClassName)}>
        {navList.map(({ caption, href }, idx) => {
          return (
            <li key={idx} className={twMerge("", listItemClassName)}>
              <Link
                href={href}
                onClick={onLinkClick}
                className={twMerge("py-[34px]", linkClassName)}
              >
                {caption}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
