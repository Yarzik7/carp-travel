"use client";
import { useEffect } from "react";
import MenuButton from "../MenuButton";

const Backdrop = ({ onClose, children }) => {
  useEffect(() => {
    const handleCloseByEsc = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleCloseByEsc);

    return () => window.removeEventListener("keydown", handleCloseByEsc);
  }, [onClose]);

  const handleCloseByClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleCloseByClick}
      className="fixed top-[0px] left-[0px] w-full h-full bg-[rgba(1, 10, 5, 0.75)]"
    >
      <MenuButton
        caption="Close"
        onClick={onClose}
        className="absolute top-[43px] right-[20px]"
      />
      {children}
    </div>
  );
};

export default Backdrop;
