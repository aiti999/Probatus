import { FunctionComponent } from "react";

export type HeroBackgroundType = {
  className?: string;
};

const HeroBackground: FunctionComponent<HeroBackgroundType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border  max-w-full  text-center ss:mt-0 mt-14 text-6xl text-white font-franie ${className}`}
    >
      <div className="w-[740px] flex flex-col items-start justify-start gap-3 max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
          <h1 className="m-0 flex-1 relative text-inherit inline-block max-w-full leading-[50px] font-inherit mq1400:text-6xl text-56px">
            <span className="ss:text-[70px] text-[30px] font-thin">Unlocking Success</span>{" "}
            <br />
            <span className="ss:text-[70px] text-[30px]   font-thin">
              with <span className="font-bold text-[#ffffff]">Proven</span>,{" "}
              <span className="font-bold text-[#ffffff]">Tried</span> and{" "}
              <span className="font-bold text-[#ffffff]">Tested</span> Solutions
            </span>
          </h1>
        </div>

        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-lg text-gray-300 font-body">
          <div className="w-[441px] flex flex-col items-start justify-start gap-6 max-w-full">
            <div className="self-stretch relative font-medium leading-6 ">
              Empowering Businesses Through Expertise in Web <br /> App
              Development, Mobile App Development, IT <br /> Consulting, and
              SaaS Solutions
            </div>
            <div className="self-stretch h-11 flex flex-row items-start justify-center py-0 px-5 box-border">
              <button className="cursor-pointer bg-green-500 hover:bg-green-400 border-darkgreen border-[1px] border-solid py-3 px-10 h-[46px] shadow-md rounded-xl flex flex-row items-center justify-center whitespace-nowrap">
                <span className="text-base leading-5 text-[1rem] font-semibold text-gray-900">
                  Explore Our Services
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBackground;
