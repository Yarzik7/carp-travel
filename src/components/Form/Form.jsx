"use client";

import Button from "../Button/Button";

const Form = ({ buttonCaption, children }) => {
  const handleFormSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <form className="" onSubmit={handleFormSubmit}>
      {children}
      <Button buttonCaption={buttonCaption} />
    </form>
  );
};

export default Form;