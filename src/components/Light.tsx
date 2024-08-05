import { FunctionComponent } from "react";

export type LightType = {
  className?: string;
};

const Light: FunctionComponent<LightType> = ({ className = "" }) => {
  return (
    <div
      className={`!m-[0] absolute top-[-48px] left-[-41px] flex flex-row items-start justify-start z-[1] ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-[5px] mix-blend-normal">
        <div className="flex flex-row items-start justify-start gap-[6px]">
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative" />
          <div className="h-[6px] w-[6px] relative" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
        </div>
        <div className="flex flex-row items-start justify-start gap-[6px]">
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
        </div>
        <div className="flex flex-row items-start justify-start gap-[6px]">
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative" />
          <div className="h-[6px] w-[6px] relative" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative" />
          <div className="h-[6px] w-[6px] relative" />
          <div className="h-[6px] w-[6px] relative bg-[#171717] hidden" />
        </div>
        <div className="flex flex-row items-start justify-start gap-[6px]">
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative" />
          <div className="h-[6px] w-[6px] relative" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
        </div>
        <div className="flex flex-row items-start justify-start py-[0px] pl-[0px] pr-[12px] gap-[18px]">
          <div className="h-[6px] w-[30px] relative">
            <div className="absolute top-[0px] left-[0px] bg-[#171717] w-[6px] h-[6px]" />
            <div className="absolute top-[0px] left-[12px] bg-[#171717] w-[6px] h-[6px]" />
            <div className="absolute top-[0px] left-[24px] bg-[#171717] w-[6px] h-[6px]" />
          </div>
          <div className="h-[6px] w-[6px] relative hidden" />
          <div className="h-[6px] w-[18px] relative">
            <div className="absolute top-[0px] left-[0px] bg-[#171717] w-[6px] h-[6px]" />
            <div className="absolute top-[0px] left-[12px] bg-[#171717] w-[6px] h-[6px]" />
          </div>
          <div className="h-[6px] w-[6px] relative hidden" />
        </div>
        <div className="flex flex-row items-start justify-start gap-[18px]">
          <div className="h-[6px] w-[30px] relative">
            <div className="absolute top-[0px] left-[0px] bg-[#171717] w-[6px] h-[6px]" />
            <div className="absolute top-[0px] left-[12px] bg-[#171717] w-[6px] h-[6px]" />
            <div className="absolute top-[0px] left-[24px] bg-[#171717] w-[6px] h-[6px]" />
          </div>
          <div className="h-[6px] w-[6px] relative hidden" />
          <div className="h-[6px] w-[30px] relative">
            <div className="absolute top-[0px] left-[0px] w-[6px] h-[6px]" />
            <div className="absolute top-[0px] left-[12px] bg-[#171717] w-[6px] h-[6px]" />
            <div className="absolute top-[0px] left-[24px] w-[6px] h-[6px]" />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[6px]">
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
        </div>
        <div className="flex flex-row items-start justify-start gap-[6px]">
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative" />
          <div className="h-[6px] w-[6px] relative" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
        </div>
        <div className="flex flex-row items-start justify-start gap-[6px]">
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
        </div>
        <div className="flex flex-row items-start justify-start gap-[6px]">
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
        </div>
        <div className="flex flex-row items-start justify-start gap-[6px]">
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
          <div className="h-[6px] w-[6px] relative bg-[#171717]" />
        </div>
        <div className="flex flex-row items-start justify-start gap-[18px]">
          <div className="h-[6px] w-[30px] relative">
            <div className="absolute top-[0px] left-[0px] bg-[#171717] w-[6px] h-[6px]" />
            <div className="absolute top-[0px] left-[12px] bg-[#171717] w-[6px] h-[6px]" />
            <div className="absolute top-[0px] left-[24px] w-[6px] h-[6px]" />
          </div>
          <div className="h-[6px] w-[6px] relative hidden" />
          <div className="h-[6px] w-[30px] relative">
            <div className="absolute top-[0px] left-[0px] bg-[#171717] w-[6px] h-[6px]" />
            <div className="absolute top-[0px] left-[12px] bg-[#171717] w-[6px] h-[6px]" />
            <div className="absolute top-[0px] left-[24px] bg-[#171717] w-[6px] h-[6px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Light;
