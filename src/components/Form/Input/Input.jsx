import { useId } from "react";
import Icon from "@/components/Icon/Icon";

const Input = ({
  label,
  name,
  onChange,
  placeholder,
  type,
  register,
  errors,
}) => {
  const InvalidMassage = ({ children }) => (
    <p
      role="alert"
      className="absolute flex align-center gap-1 top-full right-[0px] text-[12px] font-extralight tracking-[2.4px] leading-[2] text-errorColor"
    >
      <Icon iconName="error" />
      {children}
    </p>
  );

  const inputId = useId();

  return (
    <div className="w-full relative">
      <label
        htmlFor={inputId}
        className="mb-[4px] text-[12px] font-extralight leading-[2] tracking-[2.4px]"
      >
        {label}
      </label>

      {type !== "textarea" && (
        <>
          <input
            id={inputId}
            className="w-full px-[8px] text-[13px] font-extralight leading-[1.85] opacity-20"
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            {...register}
            aria-invalid={errors ? "true" : "false"}
          />
          {errors && (
            <InvalidMassage>{`${
              name === "name" ? "Incorrect" : "Invalid"
            } ${name}`}</InvalidMassage>
          )}
        </>
      )}
      {type === "textarea" && (
        <>
          <textarea
            id={inputId}
            onChange={onChange}
            name={name}
            className="w-full h-[193px] px-[8px] text-[13px] font-extralight leading-[1.85] opacity-20 resize-none text-midnight"
            {...register}
          ></textarea>
        </>
      )}
    </div>
  );
};

export default Input;
