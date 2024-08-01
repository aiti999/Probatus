import { FunctionComponent } from "react";

export type InputFieldType = {
  className?: string;
};

const InputField: FunctionComponent<InputFieldType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-xl bg-white flex flex-row items-start justify-start max-w-full text-left text-xs text-black-60 font-body ${className}`}
    >
      <div className="h-[46px] flex-1 rounded-xl flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border max-w-full">
        <div className="h-[54px] w-[518px] relative rounded border-black-20 border-[3px] border-solid box-border hidden max-w-full" />
        <div className="h-3.5 hidden flex-row items-start justify-start py-0 pl-0 pr-4 box-border gap-[3px]">
          <img
            className="h-[13px] w-[13px] relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/exclamation.svg"
          />
          <div className="self-stretch relative leading-[120%]">Message</div>
        </div>
        <div className="h-12 flex-1 relative rounded-xl border-black-20 border-[1px] border-solid box-border overflow-hidden max-w-full">
          <div className="absolute top-[15px] left-[16px] h-[18px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
            <img
              className="w-[18px] h-[18px] relative overflow-hidden shrink-0"
              alt=""
              src="/email-mail.svg"
            />
          </div>
          <div className="absolute top-[13px] left-[16px] rounded-12xs bg-black w-px h-[22px] hidden" />
          <input
            className="[border:none] [outline:none] font-body text-base bg-[transparent] absolute top-[13px] left-[16px] leading-[140%] text-black-60 text-left inline-block p-0"
            placeholder="Select Your Service"
            type="text"
          />
          <div className="absolute top-[13px] left-[122px] rounded-12xs bg-black w-px h-[22px] hidden" />
          <div className="absolute top-[13px] left-[164px] rounded-12xs w-[314px] h-[22px]" />
          <img
            className="absolute top-[15px] left-[478px] w-[18px] h-[18px]"
            alt=""
            src="/arrow-down.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default InputField;
