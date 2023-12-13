import Link from "next/link";

const ContactBlock = ({
  contactsList,
  label,
  className,
  listClassName,
  labelClassName,
  revers,
}) => {
  return (
    <div className={`flex gap-[20px] md:justify-end ${className ?? ""}`}>
      <ul
        className={`text-right smOnly:w-[${
          revers ? "34%" : "66%"
        }] md:w-[73.5%] ${listClassName ?? ""}`}
      >
        {contactsList.map(({ text, href }, idx) => (
          <li key={idx} className="">
            <Link
              href={href}
              className="leading-[1.71] text-right md:text-[16px] md:leading-[1.5] lg:text-[18px]"
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>

      <p
        className={`text-[12px] font-extralight leading-[1.67] smOnly:w-[${
          revers ? "66%" : "34%"
        }] md:w-[26.5%] ${labelClassName ?? ""}`}
      >
        {label}
      </p>
    </div>
  );
};

export default ContactBlock;
