const Container = ({ containerClasses = [], children }) => {
  const classNames = ["container", ...containerClasses];

  return <div className={classNames.join(" ")}>{children}</div>;
};

export default Container;
