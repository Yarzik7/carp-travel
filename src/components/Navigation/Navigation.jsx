import css from "./Navigation.module.css";

const navList = ["About", "Services", "Career", "Gallery", "Contacts"];

const renderNav = (item, idx) => {
  return (
    <li key={idx} className="py-[34px] text-sm">
      {item}
    </li>
  );
};

const Navigation = () => {
  return (
    <nav className="hidden tablet:block">
      <ul className="flex gap-14">{navList.map(renderNav)}</ul>
    </nav>
  );
};

export default Navigation;
