const Button = ({ buttonCaption = "Send", type = "submit" }) => {
  return (
    <button
      type={type}
      className="block ml-auto text-[30px] font-medium uppercase bg-transparent"
    >
      {buttonCaption}
    </button>
  );
};

export default Button;
