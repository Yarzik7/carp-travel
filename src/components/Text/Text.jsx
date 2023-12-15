const Text = ({ strongText, normalText, width, className = "" }) => {
  return (
    <p
      className={["text-[14px] font-extralight leading-[1.42]", className].join(
        " "
      )}
    >
      <strong className="font-normal">{strongText}</strong>
      {normalText}
    </p>
  );
};

export default Text;
