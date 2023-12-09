import Container from "../Container";
import Logo from "../Logo";
import MenuButton from "../MenuButton";
import Navigation from "../Navigation/Navigation";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className="absolute w-full bg-transparent">
      <Container containerClasses={[css.headerContainer]}>
        <Logo />
        <Navigation />
        <MenuButton />
      </Container>
    </header>
  );
};

export default Header;
