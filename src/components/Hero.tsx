import { FunctionComponent } from "react";

export type HeroType = {
  className?: string;
};

const Hero: FunctionComponent<HeroType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[253px] box-border gap-28 bg-[url('/public/hero1@3x.png')] bg-cover bg-no-repeat bg-[top] [mix-blend-mode:linear-burn] max-w-full text-center text-37xl text-white font-franie mq1150:pb-[164px] mq1150:box-border mq450:pb-[107px] mq450:box-border ${className}`}
    >
      <header className="self-stretch [backdrop-filter:blur(100px)] bg-gray1-900 overflow-hidden flex flex-row items-start justify-start py-[18px] px-20 box-border top-[0] z-[99] sticky max-w-full mq800:pl-10 mq800:pr-10 mq800:box-border">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5">
          <img
            className="h-11 w-[124px] relative object-cover"
            loading="lazy"
            alt=""
            src="/artboard-5-2@2x.png"
          />
          <nav className="m-0 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border max-w-full mq800:hidden">
            <nav className="m-0 flex flex-row items-start justify-start gap-[15.6px] text-center text-sm text-gainsboro font-body">
              <a className="[text-decoration:none] hover:text-gray-500 cursor-pointer relative leading-[20px] font-medium text-[inherit] inline-block min-w-[41px]">
                About
              </a>
              <a className="[text-decoration:none] hover:text-gray-500 cursor-pointer relative leading-[20px] font-medium text-[inherit] inline-block min-w-[59px]">
                Services
              </a>
              <a className="[text-decoration:none] hover:text-gray-500 cursor-pointer relative leading-[20px] font-medium text-[inherit] inline-block min-w-[54px]">
                Process
              </a>
              <a className="[text-decoration:none] hover:text-gray-500 cursor-pointer relative leading-[20px] font-medium text-[inherit] inline-block min-w-[77px]">
                Testimonial
              </a>
              <a className="[text-decoration:none] hover:text-gray-500 cursor-pointer relative leading-[20px] font-medium text-[inherit] inline-block min-w-[95px] whitespace-nowrap">
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
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[740px] flex flex-col items-start justify-start gap-4 max-w-full">
          <h1 className="m-0 self-stretch h-[211px] relative text-inherit leading-[72px] inline-block shrink-0 font-[inherit] mq800:text-26xl mq800:leading-[58px] mq450:text-15xl mq450:leading-[43px]">
            <span>{`Unlocking Success with `}</span>
            <span>Proven</span>
            <span>{`, `}</span>
            <span>Tried,</span>
            <span>{` and `}</span>
            <span>Tested</span>
            <span> Solutions</span>
          </h1>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-lg text-gainsboro font-body">
            <div className="w-[441px] flex flex-col items-start justify-start gap-6 max-w-full">
              <div className="self-stretch relative leading-[24px] font-medium">
                Empowering Businesses Through Expertise in Web App Development,
                Mobile App Development, IT Consulting, and SaaS Solutions
              </div>
              <div className="self-stretch h-11 flex flex-row items-start justify-center py-0 px-5 box-border">
                <button className="cursor-pointer border-darkgreen border-[1px] border-solid py-3 px-[43px] bg-lime h-[46px] shadow-[0px_8px_8px_rgba(255,_255,_255,_0.25)_inset,_0px_3px_0px_#0a4516,_0px_3px_3.8px_#11f12d_inset,_0px_4px_4px_#04c41c_inset,_3px_3px_2.2px_rgba(38,_38,_38,_0.25)_inset] rounded-xl box-border overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-green-500 hover:border-seagreen hover:border-[1px] hover:border-solid hover:box-border">
                  <div className="relative text-base leading-[20px] font-medium font-body text-gray1-800 text-left">
                    Explore Our Services
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
