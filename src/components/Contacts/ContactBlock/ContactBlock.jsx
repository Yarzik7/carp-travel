import Link from "next/link";

const ContactBlock = ({
  contactsList,
  label,
  className,
  listClassName,
  labelClassName,
}) => {
  return (
    <div className={`flex gap-[20px] md:justify-end ${className ?? ""}`}>
      <ul
        className={`smOnly:w-[66%] text-right md:w-[73.5%] ${
          listClassName ?? ""
        }`}
      >
        {contactsList.map(({ text, href }, idx) => (
          <li key={idx} className="">
            <Link
              href={href}
              className="leading-[1.71] text-right md:text-[16px] md:leading-[1.5]"
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>

      <p
        className={`smOnly:w-[34%] text-[12px] font-extralight leading-[1.67] md:w-[26.5%] ${
          labelClassName ?? ""
        }`}
      >
        {label}
      </p>
    </div>
  );
};

export default ContactBlock;
