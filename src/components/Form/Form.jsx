"use client";

import Button from "../Button/Button";

const Form = ({ buttonCaption, children, className, onSubmit }) => {
  return (
    <form className={className} onSubmit={onSubmit}>
      {children}
      <Button buttonCaption={buttonCaption} />
    </form>
  );
};

export default Form;
