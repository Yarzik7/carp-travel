"use client";
import Container from "../Container";
import Logo from "../Logo";
import MenuButton from "../MenuButton";
import Navigation from "../Navigation/Navigation";
import Modal from "../Modal/Modal";
import { useState } from "react";
import css from "./Header.module.css";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const onToggleModal = () => setShowModal(!showModal);

  return (
    <header className="absolute w-full bg-transparent">
      <Container containerClasses={[css.headerContainer]}>
        <Logo />
        <Navigation />
        {!showModal && <MenuButton caption="Menu" onClick={onToggleModal} />}
      </Container>
      {showModal && <Modal onClose={onToggleModal}>{"Modal"}</Modal>}
    </header>
  );
};

export default Header;
