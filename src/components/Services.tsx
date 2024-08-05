import { FunctionComponent } from "react";

export type ServicesType = {
  className?: string;
};

const Services: FunctionComponent<ServicesType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-[#f9f9f9] overflow-hidden flex flex-col items-start justify-start p-[80px] text-center text-[40px] text-[#212121] font-[Franie] mq825:py-[52px] mq825:px-[40px] mq825:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-[64px] gap-[32px] gap-[16px]">
        <h1 className="m-[0px] self-stretch relative text-inherit tracking-[-0.02em] leading-[56px] font-normal font-[inherit] mq825:text-[32px] mq825:leading-[45px] mq450:text-[24px] mq450:leading-[34px]">
          Our Services
        </h1>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-[18px] mq1400:flex-wrap mq1400:justify-center">
          <div className="w-[296px] rounded-[12px] bg-[#fff] border-[rgba(33,33,33,0.2)] border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-start justify-center py-[42px] px-[31px] min-w-[296px] mq1400:flex-1">
            <div className="flex-1 flex flex-col items-center justify-start pt-[0px] px-[0px] pb-[16px] gap-[16px]">
              <img
                className="w-[64px] h-[64px] relative"
                loading="lazy"
                alt=""
                src="/group-42.svg"
              />
              <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
                <div className="w-[130px] relative leading-[24px] inline-block">
                  UI UX Design
                </div>
                <div className="self-stretch relative text-[14px] tracking-[-0.02em] leading-[20px] font-[Inter] text-[#605f5f] text-center">{`Leverage our expertise in web development to create stunning and functional websites tailored to your business needs. `}</div>
              </div>
            </div>
          </div>
          <div className="h-[296px] w-[296px] rounded-[12px] bg-[#fff] border-[rgba(33,33,33,0.2)] border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-start justify-center py-[44px] px-[31px] min-w-[296px] mq1400:flex-1">
            <div className="h-[192px] flex-1 flex flex-col items-center justify-start pt-[0px] px-[0px] pb-[16px] box-border gap-[16px]">
              <img
                className="w-[64px] h-[64px] relative shrink-0"
                loading="lazy"
                alt=""
                src="/group-421.svg"
              />
              <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
                <div className="w-[194px] relative leading-[24px] inline-block">
                  Web Development
                </div>
                <div className="self-stretch relative text-[14px] tracking-[-0.02em] leading-[20px] font-[Inter] text-[#605f5f] text-center">{`Leverage our expertise in web development to create stunning and functional websites tailored to your business needs. `}</div>
              </div>
            </div>
          </div>
          <div className="h-[296px] w-[296px] rounded-[12px] bg-[#fff] border-[rgba(33,33,33,0.2)] border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-start justify-center py-[44px] px-[31px] min-w-[296px] mq1400:flex-1">
            <div className="h-[192px] flex-1 flex flex-col items-center justify-start pt-[0px] px-[0px] pb-[16px] box-border gap-[16px]">
              <img
                className="w-[64px] h-[64px] relative shrink-0"
                alt=""
                src="/group-42-1.svg"
              />
              <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
                <div className="w-[189px] relative leading-[24px] inline-block">
                  App Development
                </div>
                <div className="self-stretch relative text-[14px] tracking-[-0.02em] leading-[20px] font-[Inter] text-[#605f5f] text-center">{`Leverage our expertise in web development to create stunning and functional websites tailored to your business needs. `}</div>
              </div>
            </div>
          </div>
          <div className="h-[296px] rounded-[12px] bg-[#fff] border-[rgba(33,33,33,0.2)] border-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-center py-[44px] px-[31px] min-w-[296px] mq1400:flex-1">
            <div className="h-[192px] flex flex-col items-center justify-start pt-[0px] px-[0px] pb-[16px] box-border gap-[16px]">
              <img
                className="w-[64px] h-[64px] relative shrink-0"
                alt=""
                src="/group-42-2.svg"
              />
              <div className="w-[239px] flex flex-col items-center justify-start gap-[8px]">
                <div className="self-stretch relative leading-[24px]">
                  Software Development
                </div>
                <div className="self-stretch relative text-[14px] tracking-[-0.02em] leading-[20px] font-[Inter] text-[#605f5f] text-center">{`Leverage our expertise in web development to create stunning and functional websites tailored to your business needs. `}</div>
              </div>
            </div>
          </div>
        </div>
        <button className="cursor-pointer border-[#1b1b1b] border-[1px] border-solid py-[10px] px-[55px] bg-[#212121] shadow-[0px_0px_0px_4px_rgba(33,_33,_33,_0.12),_0px_-2px_0px_#151515_inset,_0px_2px_0px_#343434_inset] rounded-[12px] overflow-hidden flex flex-row items-end justify-center whitespace-nowrap hover:bg-[#545454] hover:border-[#4d4d4d] hover:border-[1px] hover:border-solid hover:box-border">
          <div className="relative text-[16px] leading-[24px] font-medium font-[Inter] text-[#fff] text-left inline-block min-w-[88px]">
            Get started
          </div>
        </button>
      </div>
    </section>
  );
};

export default Services;
