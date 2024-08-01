import { FunctionComponent } from "react";

export type HeroContentType = {
  className?: string;
};

const HeroContent: FunctionComponent<HeroContentType> = ({
  className = "",
}) => {
  return (
    <header
      className={`self-stretch [backdrop-filter:blur(100px)] bg-gray1-900 overflow-hidden flex flex-row items-start justify-start py-[18px] px-20 box-border top-[0] z-[99] sticky max-w-full mq800:pl-10 mq800:pr-10 mq800:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5">
        <img
          className="h-11 w-[124px] relative object-cover"
          loading="lazy"
          alt=""
          src="/artboard-5-2@2x.png"
        />
        <nav className="m-0 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border max-w-full mq800:hidden">
          <nav className="m-0 flex flex-row items-start justify-start gap-[15.6px] text-center text-sm text-gainsboro font-body">
            <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit] inline-block min-w-[41px]">
              About
            </a>
            <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit] inline-block min-w-[59px]">
              Services
            </a>
            <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit] inline-block min-w-[54px]">
              Process
            </a>
            <a className="[text-decoration:none] relative leading-[20px] text-[inherit] inline-block min-w-[76px]">
              Testimonial
            </a>
            <a className="[text-decoration:none] relative leading-[20px] text-[inherit] inline-block min-w-[93px] whitespace-nowrap">
              Why Probatus
            </a>
          </nav>
        </nav>
        <div className="h-[38px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
          <button className="cursor-pointer border-darkslategray-300 border-[1px] border-solid py-1.5 px-3 bg-gray1-700 h-[34px] rounded-xl box-border flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkslategray-200 hover:border-dimgray-100 hover:border-[1px] hover:border-solid hover:box-border">
            <a className="[text-decoration:none] relative text-base leading-[20px] font-body text-gainsboro text-left inline-block min-w-[110px] whitespace-nowrap">
              Book Free Call
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeroContent;
