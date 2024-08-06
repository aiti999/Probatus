import { FunctionComponent } from "react";

export type HeroBackgroundType = {
  className?: string;
};

const HeroBackground: FunctionComponent<HeroBackgroundType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-6xl text-white font-franie ${className}`}
    >
      <div className="w-[740px] flex flex-col items-start justify-start gap-4 max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
          <h1 className="m-0 flex-1 relative text-inherit inline-block max-w-full leading-[65px] font-inherit text-6xl mq800:text-5xl mq800:leading-[58px] mq1150:text-4xl mq1150:leading-[43px]">
            <span className="text-[70px] font-thin" > Unlocking Success </span> <br /> <span className="text-[70px] font-thin"  >with Proven, Tried and</span> <br /><span  className="text-[70px] font-thin" >Tested Solutions</span>
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-lg text-gray-300 font-body">
          <div className="w-[441px] flex flex-col items-start justify-start gap-6 max-w-full">
            <div className="self-stretch relative font-medium leading-6 ">
              Empowering Businesses Through Expertise in Web App Development, Mobile App Development, IT Consulting, and SaaS Solutions
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
