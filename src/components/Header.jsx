import Container from "./Container";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header>
      <Container>
        <Logo />
        <Navigation />
        <MenuButton />
      </Container>
    </header>
  );
};

export default Header;
