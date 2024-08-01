import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponentType = {
  className?: string;
  whyChooseUs?: string;

  /** Style props */
  whyChooseUsHeight?: CSSProperties["height"];
  whyChooseUsMinHeight?: CSSProperties["minHeight"];
  whyProbatusContentGap?: CSSProperties["gap"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  whyChooseUs,
  whyChooseUsHeight,
  whyChooseUsMinHeight,
  whyProbatusContentGap,
}) => {
  const whyChooseUsStyle: CSSProperties = useMemo(() => {
    return {
      height: whyChooseUsHeight,
      minHeight: whyChooseUsMinHeight,
    };
  }, [whyChooseUsHeight, whyChooseUsMinHeight]);

  const whyProbatusContentStyle: CSSProperties = useMemo(() => {
    return {
      gap: whyProbatusContentGap,
    };
  }, [whyProbatusContentGap]);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[68px] box-border max-w-full text-left text-21xl text-gray1-200 font-franie lg:pb-11 lg:box-border mq1150:pb-[29px] mq1150:box-border ${className}`}
    >
      <div className="flex-1 bg-whitesmoke overflow-hidden flex flex-col items-start justify-start p-20 box-border max-w-full mq800:py-[52px] mq800:px-10 mq800:box-border mq1150:pt-[34px] mq1150:pb-[34px] mq1150:box-border">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-8 max-w-full gap-4">
          <img
            className="h-[605px] flex-1 relative rounded-2xl max-w-full overflow-hidden object-cover min-w-[406px] min-h-[605px] mq800:min-w-full"
            loading="lazy"
            alt=""
            src={whyChooseUs}
            style={whyChooseUsStyle}
          />
          <div
            className="flex-1 flex flex-col items-start justify-start gap-6 min-w-[406px] max-w-full mq800:min-w-full"
            style={whyProbatusContentStyle}
          >
            <div className="self-stretch flex flex-col items-start justify-start gap-4">
              <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[56px] font-normal font-[inherit] mq800:text-13xl mq800:leading-[45px] mq1150:text-5xl mq1150:leading-[34px]">
                Why Choose Probatus?
              </h1>
              <div className="self-stretch relative text-base leading-[24px] font-body text-dimgray-200">
                We begin by conducting a thorough discovery phase, collaborating
                closely with our clients to understand their vision, goals, and
                requirements. We analyze business objectives, define project
                scope, and create a detailed project plan outlining timelines,
                milestones, and deliverables.
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-11 text-base text-dimgray-300 font-body mq800:flex-wrap gap-[22px]">
              <div className="flex-1 flex flex-col items-center justify-center gap-6 min-w-[189px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-2">
                  <b className="self-stretch relative tracking-[-0.04em] leading-[23px]">
                    Industry Experience
                  </b>
                  <div className="self-stretch relative text-sm tracking-[-0.04em] leading-[20px] text-dimgray-200">
                    Benefit from years of expertise in web app development,
                    mobile app development, IT consulting, and SaaS solutions.
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-2">
                  <b className="self-stretch relative tracking-[-0.04em] leading-[23px]">
                    Expert Team
                  </b>
                  <div className="self-stretch relative text-sm tracking-[-0.04em] leading-[20px] text-dimgray-200">
                    Partner with a team of skilled professionals in UI/UX
                    design, frontend and backend development, and database
                    management, staying ahead with the latest technologies.
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start py-0 px-[3px] gap-2">
                  <b className="w-[187px] relative tracking-[-0.04em] leading-[23px] inline-block">
                    Quality Assurance
                  </b>
                  <div className="self-stretch relative text-sm tracking-[-0.04em] leading-[20px] text-dimgray-200">
                    Ensure top-notch quality and reliability in every project
                    with our rigorous testing and meticulous attention to
                    detail.
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-6 min-w-[185px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-2">
                  <b className="w-[187px] relative tracking-[-0.04em] leading-[23px] inline-block">
                    Exceptional Value
                  </b>
                  <div className="self-stretch relative text-sm tracking-[-0.04em] leading-[20px] text-dimgray-200">
                    Choose Probatus for a trusted partner dedicated to your
                    success, delivering industry-leading solutions and
                    outstanding client service.
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-2">
                  <b className="relative tracking-[-0.04em] leading-[23px]">
                    Client-Centric Approach
                  </b>
                  <div className="self-stretch relative text-sm tracking-[-0.04em] leading-[20px] text-dimgray-200">
                    Experience collaborative and transparent processes tailored
                    to your goals, leading to long-term partnerships and
                    satisfied clients.
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-2">
                  <b className="relative tracking-[-0.04em] leading-[22px]">
                    Innovative Solutions
                  </b>
                  <div className="self-stretch relative text-sm tracking-[-0.04em] leading-[20px] text-dimgray-200">
                    Drive business growth with our innovative web and mobile
                    applications, strategic IT consulting, and creative
                    problem-solving
                  </div>
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-3 px-14 bg-gray1-200 rounded-xl flex flex-row items-end justify-center whitespace-nowrap hover:bg-dimgray-400">
              <div className="relative text-base tracking-[-0.01em] leading-[24px] font-medium font-body text-white text-left inline-block min-w-[86px]">
                Get started
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
