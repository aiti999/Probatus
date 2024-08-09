import { FunctionComponent } from "react";

type InputProps = {
  placeholder: string;
  type?: string;
  className?: string;
  iconSrc?: string;
};

const Input: FunctionComponent<InputProps> = ({
  placeholder,
  type = "text",
  className = "",
  iconSrc,
}) => (
  <div
    className={`self-stretch rounded-[4px] bg-[#f8f8f8] border-[#e6e6e6] border-[1px] border-solid box-border flex flex-row items-center justify-start py-[8px] px-[7px] max-w-full ${className}`}
  >
    <input
      type={type}
      className="w-full [border:none] [outline:none] font-medium font-[Inter] text-[14px] bg-[transparent] h-[20px] flex-1 relative leading-[20px] text-[#605f5f] text-left inline-block"
      placeholder={placeholder}
    />
    {iconSrc && (
      <img className="h-[20px] w-[20px] relative overflow-hidden shrink-0" alt="" src={iconSrc} />
    )}
  </div>
);

export default Input;
