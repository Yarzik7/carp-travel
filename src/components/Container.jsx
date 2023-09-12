const Container = ({ cssClasses = [], children }) => {
  const classNames = ["container", ...cssClasses];

  return <div className={classNames.join(" ")}>{children}</div>;
};

export default Container;
