import { FunctionComponent } from "react";

export type Process1Type = {
  className?: string;
};

const Process1: FunctionComponent<Process1Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-white overflow-hidden flex flex-col items-start justify-start py-[100px] px-20 box-border max-w-full text-left text-37xl text-gray1-200 font-franie mq800:py-[65px] mq800:px-10 mq800:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 mq1350:flex-wrap">
        <div className="w-[547px] flex flex-col items-start justify-start gap-4 min-w-[547px] max-w-full mq800:min-w-full mq1350:flex-1">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[72px] font-normal font-[inherit] mq800:text-26xl mq800:leading-[58px] mq450:text-15xl mq450:leading-[43px]">
            Our Approach to Project Delivery.
          </h1>
          <div className="w-[411px] relative text-sm tracking-[-0.02em] leading-[20px] font-body text-dimgray-200 inline-block max-w-full">
            At Probatus, we have a structured and collaborative approach to
            project delivery that ensures successful outcomes for our clients.
            Our methodology is built on industry best practices, meticulous
            planning, and a commitment to quality at every stage of the project
            lifecycle.
          </div>
        </div>
        <div className="w-[632px] flex flex-col items-start justify-start min-w-[632px] max-w-full text-base text-dimgray-200 font-body mq1150:min-w-full mq1350:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-2 max-w-full">
            <div className="self-stretch flex flex-row items-center justify-center py-6 px-2 box-border max-w-full gap-[106px] gap-[53px]">
              <button className="cursor-pointer [border:none] py-3 px-8 bg-[transparent] h-6 flex-1 flex flex-row items-center justify-between box-border max-w-full gap-5">
                <h2 className="m-0 w-[328px] relative text-5xl leading-[24px] capitalize font-normal font-franie text-gray1-300 text-left flex items-center max-w-[calc(100%_-_44px)] mq450:text-lgi mq450:leading-[19px]">
                  Discovery and Planning
                </h2>
                <img
                  className="m-0 h-6 w-6 relative overflow-hidden shrink-0"
                 src="/frame-1.svg"
                />
              </button>
            </div>
            <div className="self-stretch border-darkslategray-500 border-b-[1px] border-solid flex flex-col items-start justify-start pt-0 px-2 pb-[22px]">
              <div className="self-stretch relative leading-[24px]">
                We begin by conducting a thorough discovery phase, collaborating
                closely with our clients to understand their vision, goals, and
                requirements. We analyze business objectives, define project
                scope, and create a detailed project plan outlining timelines,
                milestones, and deliverables.
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-3 px-8 bg-[transparent] self-stretch border-darkslategray-500 border-b-[1px] border-solid box-border flex flex-row items-center justify-between min-h-[72px] max-w-full gap-5 hover:bg-darkslategray-400">
            <h2 className="m-0 w-[475px] relative text-5xl leading-[24px] capitalize font-normal font-franie text-gray1-300 text-left flex items-center max-w-[calc(100%_-_44px)] mq450:text-lgi mq450:leading-[19px]">
              Development and Implementation
            </h2>
            <img
              className="m-0 h-6 w-6 relative overflow-hidden shrink-0"
              src="/frame-2.svg"
            />
          </button>
          <button className="cursor-pointer [border:none] py-3 px-8 bg-[transparent] self-stretch border-darkslategray-500 border-b-[1px] border-solid box-border flex flex-row items-center justify-between min-h-[72px] max-w-full gap-5 hover:bg-darkslategray-400">
            <h2 className="m-0 w-[420px] relative text-5xl leading-[24px] capitalize font-normal font-franie text-gray1-300 text-left flex items-center max-w-[calc(100%_-_44px)] mq450:text-lgi mq450:leading-[19px]">
              Quality Assurance and Testing
            </h2>
            <img
              className="m-0 h-6 w-6 relative overflow-hidden shrink-0"
              src="/frame-2.svg"
            />
          </button>
          <button className="cursor-pointer [border:none] py-3 px-8 bg-[transparent] self-stretch border-darkslategray-500 border-b-[1px] border-solid box-border flex flex-row items-center justify-between min-h-[72px] max-w-full gap-5 hover:bg-darkslategray-400">
            <h2 className="m-0 w-[343px] relative text-5xl leading-[24px] capitalize font-normal font-franie text-gray1-300 text-left flex items-center max-w-[calc(100%_-_44px)] mq450:text-lgi mq450:leading-[19px]">
              Deployment and Launch
            </h2>
            <img
              className="m-0 h-6 w-6 relative overflow-hidden shrink-0"
              src="/frame-2.svg"
            />
          </button>
          <button className="cursor-pointer [border:none] py-3 px-8 bg-[transparent] self-stretch border-darkslategray-500 border-b-[1px] border-solid box-border flex flex-row items-center justify-between min-h-[72px] max-w-full gap-5 hover:bg-darkslategray-400">
            <h2 className="m-0 w-[545px] relative text-5xl leading-[24px] capitalize font-normal font-franie text-gray1-300 text-left flex items-center max-w-[calc(100%_-_44px)] mq450:text-lgi mq450:leading-[19px]">
              Post-Launch Support and Maintenance
            </h2>
            <img
              className="m-0 h-6 w-6 relative overflow-hidden shrink-0"
              src="/frame-2.svg"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process1;
