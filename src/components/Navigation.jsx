const navList = ["About", "Services", "Career", "Gallery", "Contacts"];

const renderNav = (item, idx) => {
  return <li key={idx}>{item}</li>;
};

const Navigation = () => {
  return (
    <nav>
      <ul>{navList.map(renderNav)}</ul>
    </nav>
  );
};

export default Navigation;
