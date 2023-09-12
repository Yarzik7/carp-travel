import Container from "../Container";
import Logo from "../Logo";
import MenuButton from "../MenuButton";
import Navigation from "../Navigation/Navigation";
import css from './Header.module.css'

const Header = () => {
  return (
    <header className={css.header}>
      <Container cssClasses={[css.headerContainer]}>
        <Logo />
        <Navigation />
        <MenuButton />
      </Container>
    </header>
  );
};

export default Header;
