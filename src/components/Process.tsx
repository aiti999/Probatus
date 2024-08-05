import { FunctionComponent } from "react";

export type ProcessType = {
  className?: string;
};

const Process: FunctionComponent<ProcessType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-[#fff] overflow-hidden flex flex-col items-start justify-start py-[108px] px-[80px] box-border max-w-full text-left text-[56px] text-[#212121] font-[Franie] mq825:py-[70px] mq825:px-[40px] mq825:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1400:flex-wrap">
        <div className="w-[547px] flex flex-col items-start justify-start gap-[16px] min-w-[547px] max-w-full mq825:min-w-full mq1400:flex-1">
          <h1 className="m-[0px] self-stretch relative text-inherit tracking-[-0.02em] leading-[72px] font-normal font-[inherit] mq825:text-[45px] mq825:leading-[58px] mq450:text-[34px] mq450:leading-[43px]">
            Our Approach to Project Delivery.
          </h1>
          <div className="w-[411px] relative text-[14px] tracking-[-0.02em] leading-[20px] font-[Inter] text-[#605f5f] inline-block max-w-full">
            At Probatus, we have a structured and collaborative approach to
            project delivery that ensures successful outcomes for our clients.
            Our methodology is built on industry best practices, meticulous
            planning, and a commitment to quality at every stage of the project
            lifecycle.
          </div>
        </div>
        <div className="w-[632px] flex flex-col items-start justify-start min-w-[632px] max-w-full text-[24px] text-[#1a1a1a] lg:min-w-full mq1400:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
            <div className="self-stretch flex flex-row items-center justify-center py-[24px] px-[8px] box-border max-w-full gap-[106px] gap-[53px]">
              <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-[20px]">
                <h2 className="m-[0px] w-[328px] relative text-inherit leading-[24px] capitalize font-normal font-[inherit] flex items-center max-w-[calc(100%_-_44px)] mq450:text-[19px] mq450:leading-[19px]">
                  Discovery and Planning
                </h2>
                <img
                  className="h-[24px] w-[24px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/frame1.svg"
                />
              </div>
            </div>
            <div className="self-stretch border-[rgba(0,43,49,0.16)] border-b-[1px] border-solid flex flex-col items-start justify-start pt-[0px] px-[8px] pb-[22px] text-[16px] text-[#605f5f] font-[Inter]">
              <div className="self-stretch relative leading-[24px]">
                We begin by conducting a thorough discovery phase, collaborating
                closely with our clients to understand their vision, goals, and
                requirements. We analyze business objectives, define project
                scope, and create a detailed project plan outlining timelines,
                milestones, and deliverables.
              </div>
            </div>
          </div>
          <div className="self-stretch border-[rgba(0,43,49,0.16)] border-b-[1px] border-solid box-border flex flex-row items-center justify-between min-h-[72px] max-w-full gap-[20px]">
            <h2 className="m-[0px] w-[475px] relative text-inherit leading-[24px] capitalize font-normal font-[inherit] flex items-center max-w-[calc(100%_-_44px)] mq450:text-[19px] mq450:leading-[19px]">
              Development and Implementation
            </h2>
            <img
              className="h-[24px] w-[24px] relative overflow-hidden shrink-0"
              alt=""
              src="/frame-1.svg"
            />
          </div>
          <div className="self-stretch border-[rgba(0,43,49,0.16)] border-b-[1px] border-solid box-border flex flex-row items-center justify-between min-h-[72px] max-w-full gap-[20px]">
            <h2 className="m-[0px] w-[420px] relative text-inherit leading-[24px] capitalize font-normal font-[inherit] flex items-center max-w-[calc(100%_-_44px)] mq450:text-[19px] mq450:leading-[19px]">
              Quality Assurance and Testing
            </h2>
            <img
              className="h-[24px] w-[24px] relative overflow-hidden shrink-0"
              alt=""
              src="/frame-1.svg"
            />
          </div>
          <div className="self-stretch border-[rgba(0,43,49,0.16)] border-b-[1px] border-solid box-border flex flex-row items-center justify-between min-h-[72px] max-w-full gap-[20px]">
            <h2 className="m-[0px] w-[343px] relative text-inherit leading-[24px] capitalize font-normal font-[inherit] flex items-center max-w-[calc(100%_-_44px)] mq450:text-[19px] mq450:leading-[19px]">
              Deployment and Launch
            </h2>
            <img
              className="h-[24px] w-[24px] relative overflow-hidden shrink-0"
              alt=""
              src="/frame-1.svg"
            />
          </div>
          <div className="self-stretch border-[rgba(0,43,49,0.16)] border-b-[1px] border-solid box-border flex flex-row items-center justify-between min-h-[72px] max-w-full gap-[20px]">
            <h2 className="m-[0px] w-[545px] relative text-inherit leading-[24px] capitalize font-normal font-[inherit] flex items-center max-w-[calc(100%_-_44px)] mq450:text-[19px] mq450:leading-[19px]">
              Post-Launch Support and Maintenance
            </h2>
            <img
              className="h-[24px] w-[24px] relative overflow-hidden shrink-0"
              alt=""
              src="/frame-1.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
