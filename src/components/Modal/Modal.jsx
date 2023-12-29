"use client";
import Backdrop from "./Backdrop";
import ModalContent from "./ModalContent";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ onClose, children }) => {
  return createPortal(
    <Backdrop onClose={onClose}>
      <ModalContent>{children}</ModalContent>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
