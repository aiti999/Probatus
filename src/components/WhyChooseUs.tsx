import { FunctionComponent } from "react";

export type WhyChooseUs = {
  className?: string;
};

const WhyChooseUs: FunctionComponent<WhyChooseUs> = ({ className = "" }) => {
  return (
    <section id="why-probatus"
      className={`self-stretch flex flex-row items-start justify-start pt-[0px] px-[0px] pb-[80px] box-border max-w-full text-left text-[40px] text-[#212121] Font-[Franie] lg:pb-[52px] lg:box-border mq450:pb-[34px] mq450:box-border ${className}`}
    >
      <div className="flex-1 bg-[#f9f9f9] overflow-hidden flex flex-col items-start justify-start p-[80px] box-border max-w-full mq825:py-[52px] mq825:px-[40px] mq825:box-border mq450:pt-[34px] mq450:pb-[34px] mq450:box-border">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[32px] max-w-full ">
          <img
            className="h-auto flex-1 relative rounded-[16px] max-w-full overflow-hidden object-cover w-full min-w-[406px] mq825:min-w-full mq825:h-[auto]"
            loading="lazy"
            alt=""
            src="/why-choose-us@2x.png"
          />

          <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[406px] max-w-full mq825:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <h1 className="m-[0px] self-stretch relative text-inherit tracking-[-0.02em] leading-[56px] font-normal font-[inherit] mq825:text-[32px] mq825:leading-[45px] mq450:text-[56px] mq450:leading-[56px]">
                Why Choose Probatus?
              </h1>
              <div className="self-stretch relative text-[16px] leading-[24px] font-[Inter] text-[#605f5f]">
                We begin by conducting a thorough discovery phase, collaborating
                closely with our clients to understand their vision, goals, and
                requirements. We analyze business objectives, define project
                scope, and create a detailed project plan outlining timelines,
                milestones, and deliverables.
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[44px] text-[16px] text-[#555] font-[Inter] mq825:flex-wrap">
              <div className="flex-1 flex flex-col items-center justify-center gap-[24px] min-w-[189px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                  <b className="self-stretch relative tracking-[-0.04em] leading-[23px]">
                    Industry Experience
                  </b>
                  <div className="self-stretch relative text-[14px] tracking-[-0.04em] leading-[20px] text-[#605f5f]">
                    Benefit from years of expertise in web app development,
                    mobile app development, IT consulting, and SaaS solutions.
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                  <b className="self-stretch relative tracking-[-0.04em] leading-[23px]">
                    Expert Team
                  </b>
                  <div className="self-stretch relative text-[14px] tracking-[-0.04em] leading-[20px] text-[#605f5f]">
                    Partner with a team of skilled professionals in UI/UX
                    design, frontend and backend development, and database
                    management, staying ahead with the latest technologies.
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start py-[0px] px-[3px] gap-[8px]">
                  <b className="w-[187px] relative tracking-[-0.04em] leading-[23px] inline-block">
                    Quality Assurance
                  </b>
                  <div className="self-stretch relative text-[14px] tracking-[-0.04em] leading-[20px] text-[#605f5f]">
                    Ensure top-notch quality and reliability in every project
                    with our rigorous testing and meticulous attention to
                    detail.
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[185px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                  <b className="w-[187px] relative tracking-[-0.04em] leading-[23px] inline-block">
                    Exceptional Value
                  </b>
                  <div className="self-stretch relative text-[14px] tracking-[-0.04em] leading-[20px] text-[#605f5f]">
                    Choose Probatus for a trusted partner dedicated to your
                    success, delivering industry-leading solutions and
                    outstanding client service.
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                  <b className="relative tracking-[-0.04em] leading-[23px]">
                    Client-Centric Approach
                  </b>
                  <div className="self-stretch relative text-[14px] tracking-[-0.04em] leading-[20px] text-[#605f5f]">
                    Experience collaborative and transparent processes tailored
                    to your goals, leading to long-term partnerships and
                    satisfied clients.
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                  <b className="relative tracking-[-0.04em] leading-[22px]">
                    Innovative Solutions
                  </b>
                  <div className="self-stretch relative text-[14px] tracking-[-0.04em] leading-[20px] text-[#605f5f]">
                    Drive business growth with our innovative web and mobile
                    applications, strategic IT consulting, and creative
                    problem-solving
                  </div>
                </div>
              </div>
            </div>
            <button className="cursor-pointer border-[#1b1b1b] border-[1px] border-solid py-[10px] px-[55px] bg-[#212121] shadow-[0px_0px_0px_4px_rgba(33,_33,_33,_0.12),_0px_-2px_0px_#151515_inset,_0px_2px_0px_#343434_inset] rounded-[12px] overflow-hidden flex flex-row items-end justify-center whitespace-nowrap hover:bg-[#545454] hover:border-[#4d4d4d] mq450:w-[350px] mq450:h-[56px] hover:border-[1px] hover:border-solid hover:box-border">
              <div className="relative text-[16px] tracking-[-0.01em] pb-1 leading-[24px] font-medium font-[Inter] text-[#fff] text-left inline-block min-w-[86px]">
                Get started
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
