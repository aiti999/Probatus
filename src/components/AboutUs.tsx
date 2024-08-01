import { FunctionComponent } from "react";

export type AboutUsType = {
  className?: string;
};

const AboutUs: FunctionComponent<AboutUsType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-between max-w-full gap-5 text-left text-21xl text-gray1-200 font-franie mq450:flex-wrap ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-6 min-w-[330px] max-w-full mq450:flex-1">
        <h1 className="m-0 w-52 relative text-inherit tracking-[-0.02em] leading-[120%] font-normal font-[inherit] inline-block mq800:text-13xl mq800:leading-[38px] mq1150:text-5xl mq1150:leading-[29px]">
          <span>About Us</span>
          <span className="text-lawngreen">.</span>
        </h1>
        <div className="flex flex-col items-start justify-start gap-2">
          <div className="flex flex-row items-start justify-start gap-2">
            <button className="cursor-pointer border-gray1-200 border-[1px] border-solid py-2.5 px-[22px] bg-[transparent] rounded-13xl flex flex-row items-center justify-center hover:bg-dimgray-700 hover:border-dimgray-400 hover:border-[1px] hover:border-solid hover:box-border">
              <div className="relative text-base tracking-[-0.01em] leading-[24px] font-body text-gray1-200 text-left inline-block min-w-[90px]">
                Introduction
              </div>
            </button>
            <button className="cursor-pointer border-gray1-1000 border-[1px] border-solid py-2.5 px-[22px] bg-[transparent] w-[105px] rounded-13xl box-border flex flex-row items-center justify-center hover:bg-dimgray-700 hover:border-dimgray-600 hover:border-[1px] hover:border-solid hover:box-border">
              <div className="relative text-base tracking-[-0.01em] leading-[24px] font-body text-gray1-1000 text-left inline-block min-w-[58px]">
                Mission
              </div>
            </button>
          </div>
          <div className="flex flex-row items-start justify-start gap-2 mq1150:flex-wrap">
            <button className="cursor-pointer border-gray1-1000 border-[1px] border-solid py-2.5 px-[30px] bg-[transparent] rounded-13xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-dimgray-700 hover:border-dimgray-600 hover:border-[1px] hover:border-solid hover:box-border">
              <div className="relative text-base tracking-[-0.01em] leading-[24px] font-body text-gray1-1000 text-left inline-block min-w-[90px]">
                Core Values
              </div>
            </button>
            <button className="cursor-pointer border-gray1-1000 border-[1px] border-solid py-2.5 px-[31px] bg-[transparent] rounded-13xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-dimgray-700 hover:border-dimgray-600 hover:border-[1px] hover:border-solid hover:box-border">
              <div className="relative text-base tracking-[-0.01em] leading-[24px] font-body text-gray1-1000 text-left inline-block min-w-[105px]">
                Key Strengths
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="w-[730px] flex flex-col items-start justify-start py-0 px-0 box-border gap-6 min-w-[730px] max-w-full lg:min-w-full mq450:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-4">
          <h1 className="m-0 w-[272px] relative text-inherit tracking-[-0.02em] leading-[56px] font-normal font-[inherit] inline-block mq800:text-13xl mq800:leading-[45px] mq1150:text-5xl mq1150:leading-[34px]">
            Introduction
          </h1>
          <div className="self-stretch relative text-base tracking-[-0.02em] leading-[24px] font-body text-dimgray-200">
            At Probatus, we believe in the power of expertise and dedication.
            Our journey began with a vision to provide proven, tried, and tested
            solutions that empower businesses to achieve success. With a team of
            seasoned professionals and a commitment to quality, we've earned a
            reputation for delivering results that exceed expectations
          </div>
        </div>
        <div className="w-[154px] h-12 rounded-xl bg-gray1-200 flex flex-row items-end justify-center gap-1 text-base text-white font-body">
          <h3 className="m-0 relative text-inherit tracking-[-0.01em] leading-[24px] font-medium font-[inherit] inline-block min-w-[66px]">
            Discover
          </h3>
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0"
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
