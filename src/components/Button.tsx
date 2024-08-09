import { FunctionComponent, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
};

const Button: FunctionComponent<ButtonProps> = ({ children, className = "" }) => (
  <button
    className={`cursor-pointer border-[#1b1b1b] border-[1px] border-solid py-[10px] px-[20px] bg-[#212121] self-stretch shadow-[0px_0px_0px_4px_rgba(33,_33,_33,_0.12),_0px_-2px_0px_#151515_inset,_0px_2px_0px_#343434_inset] rounded-[12px] overflow-hidden flex flex-row items-end justify-center hover:bg-[#545454] hover:border-[#4d4d4d] hover:border-[1px] hover:border-solid hover:box-border ${className}`}
  >
    <div className="relative text-[16px] tracking-[-0.01em] leading-[24px] font-medium font-[Inter] text-[#fff] text-left">
      {children}
    </div>
  </button>
);

export default Button;
