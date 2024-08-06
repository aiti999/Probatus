import { FunctionComponent } from "react";

export type AboutUsType = {
  className?: string;
};

const AboutUs: FunctionComponent<AboutUsType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-[40px] text-[#212121] font-[Franie] mq1400:flex-wrap ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-[24px] min-w-[330px] max-w-full mq1400:flex-1">
        <h1 className="m-[0px] w-[208px] relative text-inherit tracking-[-0.02em] leading-[120%] font-normal font-[inherit] inline-block mq825:text-[32px] mq825:leading-[38px] mq450:text-[24px] mq450:leading-[29px]">
          <span>About Us</span>
          <span className="text-[#96fc04]">.</span>
        </h1>
        <div className="flex flex-col items-start justify-start gap-[8px]">
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <button className="cursor-pointer border-[#212121] border-[1px] border-solid py-[10px] px-[22px] bg-[transparent] rounded-[32px] flex flex-row items-center justify-center hover:bg-[rgba(84,84,84,0.09)] hover:border-[#545454] hover:border-[1px] hover:border-solid hover:box-border">
              <div className="relative text-[16px] tracking-[-0.01em] leading-[24px] font-[Inter] text-[#212121] text-left inline-block min-w-[90px]">
                Introduction
              </div>
            </button>
            <button className="cursor-pointer border-[rgba(33,33,33,0.5)] border-[1px] border-solid py-[10px] px-[22px] bg-[transparent] w-[105px] rounded-[32px] box-border flex flex-row items-center justify-center hover:bg-[rgba(84,84,84,0.09)] hover:border-[rgba(84,84,84,0.5)] hover:border-[1px] hover:border-solid hover:box-border">
              <div className="relative text-[16px] tracking-[-0.01em] leading-[24px] font-[Inter] text-[rgba(33,33,33,0.5)] text-left inline-block min-w-[58px]">
                Mission
              </div>
            </button>
          </div>
          <div className="flex flex-row items-start justify-start gap-[8px] mq450:flex-wrap">
            <button className="cursor-pointer border-[rgba(33,33,33,0.5)] border-[1px] border-solid py-[10px] px-[30px] bg-[transparent] rounded-[32px] flex flex-row items-center justify-center whitespace-nowrap hover:bg-[rgba(84,84,84,0.09)] hover:border-[rgba(84,84,84,0.5)] hover:border-[1px] hover:border-solid hover:box-border">
              <div className="relative text-[16px] tracking-[-0.01em] leading-[24px] font-[Inter] text-[rgba(33,33,33,0.5)] text-left inline-block min-w-[90px]">
                Core Values
              </div>
            </button>
            <button className="cursor-pointer border-[rgba(33,33,33,0.5)] border-[1px] border-solid py-[10px] px-[31px] bg-[transparent] rounded-[32px] flex flex-row items-center justify-center whitespace-nowrap hover:bg-[rgba(84,84,84,0.09)] hover:border-[rgba(84,84,84,0.5)] hover:border-[1px] hover:border-solid hover:box-border">
              <div className="relative text-[16px] tracking-[-0.01em] leading-[24px] font-[Inter] text-[rgba(33,33,33,0.5)] text-left inline-block min-w-[105px]">
                Key Strengths
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="w-[730px] flex flex-col items-start justify-start py-[0px] px-[0px] box-border gap-[24px] min-w-[730px] max-w-full lg:min-w-full mq1400:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <h1 className="m-[0px] w-[272px] relative text-inherit tracking-[-0.02em] leading-[56px] font-normal font-[inherit] inline-block mq825:text-[32px] mq825:leading-[45px] mq450:text-[24px] mq450:leading-[34px]">
            Introduction
          </h1>
          <div className="self-stretch relative text-[16px] tracking-[-0.02em] leading-[24px] font-[Inter] text-[#605f5f]">
            At Probatus, we believe in the power of expertise and dedication.
            Our journey began with a vision to provide proven, tried, and tested
            solutions that empower businesses to achieve success. With a team of
            seasoned professionals and a commitment to quality, we've earned a
            reputation for delivering results that exceed expectations
          </div>
        </div>
        <div className="w-[154px] h-[48px] shadow-[0px_0px_0px_4px_rgba(33,_33,_33,_0.12),_0px_-2px_0px_#151515_inset,_0px_2px_0px_#343434_inset] rounded-[12px] bg-[#212121] border-[#1b1b1b] border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-end justify-center gap-[4px] text-[16px] text-[#fff] font-[Inter]">
          <h2 className="m-[0px] cursor-pointer relative pb-2 text-inherit tracking-[-0.01em] leading-[24px] font-medium font-[inherit] inline-block min-w-[66px]">
            Discover
          </h2>
          <img
            className="h-[20px] w-[20px] pb-3 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/frame.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
