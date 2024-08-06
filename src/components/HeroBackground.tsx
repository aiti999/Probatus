import { FunctionComponent } from "react";

export type HeroBackgroundType = {
  className?: string;
};

const HeroBackground: FunctionComponent<HeroBackgroundType> = ({
  className = "heroBackground",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-37xl text-white font-franie ${className}`}
    >
      <div className="w-[740px] flex flex-col items-start justify-start gap-4 max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
        <h1 className="m-0 h-[211px] flex-1 relative text-inherit leading-[72px] inline-block max-w-full font-[inherit] text-56px mq800:text-26xl mq800:leading-[58px] mq1150:text-15xl mq1150:leading-[43px]">
      <span>{`Unlocking Success with `}</span>
      <span>Proven</span>
      <span>{`, `}</span>
      <span>Tried,</span>
      <span>{` and `}</span>
      <span>Tested</span>
      <span> Solutions</span>
    </h1>

        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-lg text-gainsboro font-body">
          <div className="w-[441px] flex flex-col items-start justify-start gap-6 max-w-full">
            <div className="self-stretch relative leading-[24px] font-medium">
              Empowering Businesses Through Expertise in Web App Development,
              Mobile App Development, IT Consulting, and SaaS Solutions
            </div>
            <div className="self-stretch h-11 flex flex-row items-start justify-center py-0 px-5 box-border">
              <button className="cursor-pointer bg-green-500 hover:bg-green-400 border-darkgreen border-[1px] border-solid py-3 px-[43px] bg-lime h-[46px] shadow-[0px_8px_8px_rgba(255,_255,_255,_0.25)_inset,_0px_3px_0px_#0a4516,_0px_3px_3.8px_#11f12d_inset,_0px_4px_4px_#04c41c_inset,_3px_3px_2.2px_rgba(38,_38,_38,_0.25)_inset] rounded-xl box-border overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-limegreen hover:border-seagreen hover:border-[1px] hover:border-solid hover:box-border">
                <div className="relative text-base leading-[20px] font-medium font-body text-gray1-800 text-left">
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
