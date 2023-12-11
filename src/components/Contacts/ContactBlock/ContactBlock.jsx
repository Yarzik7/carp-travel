import Link from "next/link";

const ContactBlock = ({ contactsList, label, rowReverse = false }) => {
  return (
    <div className={`flex gap-[20px]${rowReverse ? " flex-row-reverse" : ""}`}>
      <div className="w-2/3">
        <ul className="text-right">
          {contactsList.map(({ text, href }, idx) => (
            <li key={idx} className="">
              <Link href={href} className="leading-[1.71] text-right">
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/3">
        <p className="text-[12px] font-extralight leading-[1.67]">{label}</p>
      </div>
    </div>
  );
};

export default ContactBlock;
