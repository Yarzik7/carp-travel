import Link from "next/link";

const ContactBlock = ({ contactsList, label, rowReverse = false }) => {
  return (
    <div className={`flex gap-[20px] justify-end${rowReverse ? " flex-row-reverse" : ""}`}>
      <ul>
        {contactsList.map(({ text, href }, idx) => (
          <li key={idx}>
            <Link href={href} className="leading-[1.71]">
              {text}
            </Link>
          </li>
        ))}
      </ul>

      <p className="text-[12px] font-extralight leading-[1.67]">{label}</p>
    </div>
  );
};

export default ContactBlock;
