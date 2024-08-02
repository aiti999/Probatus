import { FunctionComponent } from "react";

export type About1Type = {
  className?: string;
};

const About1: FunctionComponent<About1Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-start justify-start p-20 box-border max-w-full text-left text-21xl text-gray1-200 font-franie mq800:pl-10 mq800:pr-10 mq800:box-border mq450:pt-[52px] mq450:pb-[52px] mq450:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 mq1350:flex-wrap">
        <div className="flex flex-col items-start justify-start gap-6 min-w-[330px] max-w-full mq1350:flex-1">
          <h1 className="m-0 w-52 relative text-inherit tracking-[-0.02em] leading-[120%] font-normal font-[inherit] inline-block mq800:text-13xl mq800:leading-[38px] mq450:text-5xl mq450:leading-[29px]">
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
            <div className="flex flex-row items-start justify-start gap-2 mq450:flex-wrap">
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
        <div className="w-[730px] flex flex-col items-start justify-start py-0 px-0 box-border gap-6 min-w-[730px] max-w-full mq1150:min-w-full mq1350:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-4">
            <h1 className="m-0 w-[272px] relative text-inherit tracking-[-0.02em] leading-[56px] font-normal font-[inherit] inline-block mq800:text-13xl mq800:leading-[45px] mq450:text-5xl mq450:leading-[34px]">
              Introduction
            </h1>
            <div className="self-stretch relative text-base tracking-[-0.02em] leading-[24px] font-body text-dimgray-200">
              At Probatus, we believe in the power of expertise and dedication.
              Our journey began with a vision to provide proven, tried, and
              tested solutions that empower businesses to achieve success. With
              a team of seasoned professionals and a commitment to quality,
              we've earned a reputation for delivering results that exceed
              expectations
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-3 px-8 bg-gray1-200 rounded-xl flex flex-row items-end justify-center gap-1 hover:bg-dimgray-400">
            <div className="relative text-base tracking-[-0.01em] leading-[24px] font-medium font-body text-white text-left inline-block min-w-[66px]">
              Discover
            </div>
            <img
            className="h-5 w-5 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/frame.svg"
          />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About1;
