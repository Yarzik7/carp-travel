const Title = ({ boldPart, normalPart }) => {
  return (
    <h2 className="font-thin -tracking-[1.6px] uppercase text-[40px] md:text-[67px] lg:text-[98px]">
      {normalPart} <span className="font-medium">{boldPart}</span>
    </h2>
  );
};

export default Title;
