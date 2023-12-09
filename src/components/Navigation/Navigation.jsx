import css from "./Navigation.module.css";
import Link from "next/link";

const navList = [
  { caption: "About", href: "#about" },
  { caption: "Services", href: "#services" },
  { caption: "Career", href: "#career" },
  { caption: "Gallery", href: "#gallery" },
  { caption: "Contacts", href: "#contacts" },
];

const renderNav = ({ caption, href }, idx) => {
  return (
    <li key={idx} className="">
      <Link href={href} className="py-[34px]">
        {caption}
      </Link>
    </li>
  );
};

const Navigation = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-[24px] lg:gap-[56px]">
        {navList.map(renderNav)}
      </ul>
    </nav>
  );
};

export default Navigation;
