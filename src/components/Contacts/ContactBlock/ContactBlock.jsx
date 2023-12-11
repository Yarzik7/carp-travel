import Link from "next/link";

const ContactBlock = ({
  contactsList,
  label,
  className,
  listClassName,
  labelClassName,
}) => {
  return (
    <div className={`flex gap-[20px] ${className}`}>
      <ul className={`w-2/3 text-right ${listClassName}`}>
        {contactsList.map(({ text, href }, idx) => (
          <li key={idx} className="">
            <Link href={href} className="leading-[1.71] text-right">
              {text}
            </Link>
          </li>
        ))}
      </ul>

      <p
        className={`w-1/3 marker:text-[12px] font-extralight leading-[1.67] ${labelClassName}`}
      >
        {label}
      </p>
    </div>
  );
};

export default ContactBlock;
