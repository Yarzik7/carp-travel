const Icon = ({ iconName, size = 18 }) => {
  return (
    <svg
      width="18"
      height="18"
      role="img"
      aria-label="Vercel logo"
      className="flex justify-center items-center"
    >
      <use href="/sprite.svg#resend" />
    </svg>
  );
};

export default Icon;
