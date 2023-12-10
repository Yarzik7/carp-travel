import { useId } from "react";

const Input = ({
  label,
  name,
  required = true,
  onChange,
  placeholder,
  type,
  value,
}) => {
  const inputId = useId();
  return (
    <>
      {label && (
        <label
          htmlFor={inputId}
          className="mb-[4px] text-[12px] font-extralight leading-[2] tracking-[2.4px]"
        >
          {label}
        </label>
      )}
      {type !== "textarea" && (
        <input
          id={inputId}
          className="w-full px-[8px] text-[13px] font-extralight leading-[1.85] opacity-20 text-midnight"
          type={type}
          name={name}
          //   value={value}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
        />
      )}
      {type === "textarea" && (
        <textarea
          id={inputId}
          //   value={value}
          onChange={onChange}
          name={name}
          className="w-full h-[193px] px-[8px] text-[13px] font-extralight leading-[1.85] opacity-20 resize-none text-midnight"
        ></textarea>
      )}
    </>
  );
};

export default Input;
