import React, { FunctionComponent } from "react";
import Light from "./Light";

export type HeroBackground = {
  className?: string;
};

const HeroBackground: FunctionComponent<HeroBackground> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-[0px] px-[20px] box-border max-w-full shrink-0 text-center text-[56px] text-[#fff] font-[Franie] ${className}`}
    >
      <div className="relative w-[740px] flex flex-col items-start justify-start gap-[16px] max-w-full">
        {/* Top Left Light */}
        <div className="absolute top-[-10px] left-[-10px]">
          <Light />
        </div>

        {/* Top Right Light */}
        <div className="absolute top-[-10px] scale-x-[-1] right-[-10px]">
          <Light />
        </div>

        {/* Main Heading */}
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
          <h1 className="m-0 flex-1 relative text-inherit inline-block max-w-full leading-[72px] font-inherit mq1400:text-6xl text-56px">
            <span className="ss:text-[70px] text-[48px] font-thin">Unlocking Success</span>{" "}
            <br/>
            <span className="ss:text-[70px] text-[48px]   font-thin">
              with <span className="font-bold text-[#ffffff]">Proven</span>,{" "}
              <span className="font-bold text-[#ffffff]">Tried</span> and{" "}
              <span className="font-bold text-[#ffffff]">Tested</span> Solutions
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="self-stretch flex flex-row items-start justify-center py-[0px] px-[20px] box-border max-w-full text-[18px] text-[#e0dfe1] font-[Inter]">
          <div className="w-[441px] flex flex-col items-start justify-start gap-[24px] max-w-full">
            <div className="self-stretch relative leading-[24px] font-medium">
              Empowering Businesses Through Expertise in Web App Development,
              Mobile App Development, IT Consulting, and SaaS Solutions
            </div>
            <div className="self-stretch h-[44px] flex flex-row items-start justify-center py-[0px] px-[20px] box-border">
              <button className="cursor-pointer border-[#0e5a17] border-[1px] border-solid py-[12px] px-[43px] bg-[#39d24c] h-[46px] shadow-[0px_8px_8px_#5ee16e_inset,_0px_3px_0px_#0a4516,_0px_3px_3.8px_#11f12d_inset,_0px_4px_4px_#04c41c_inset,_3px_3px_2.2px_rgba(38,_38,_38,_0.25)_inset] rounded-[12px] box-border overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-[#1fba33] hover:border-[#36803d] hover:border-[1px] hover:border-solid hover:box-border">
                <div className="relative text-[16px] leading-[20px] font-medium font-[Inter] text-[#021c05] text-left">
                  Explore Our Services
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBackground;
