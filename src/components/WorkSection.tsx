import { FunctionComponent } from "react";

export type WorkSectionType = {
  className?: string;
};

const WorkSection: FunctionComponent<WorkSectionType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-row items-center justify-start py-[64px] px-[80px] box-border max-w-full z-[1] text-center text-[56px] text-[#212121] font-[Franie] lg:pt-[27px] lg:pb-[27px] lg:box-border mq825:pl-[40px] mq825:pr-[40px] mq825:box-border mq450:pt-[20px] mq450:pb-[20px] mq450:box-border mq1400:pt-[42px] mq1400:pb-[42px] mq1400:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-center justify-start gap-[64px] max-w-full ">
        <div className="w-[547px] flex flex-col items-center justify-center gap-[16px] max-w-full">
          <h1 className="m-[0px] self-stretch relative text-inherit tracking-[-0.02em] leading-[72px] font-normal font-[inherit] mq825:text-[45px] mq825:leading-[58px] mq450:text-[34px] mq450:leading-[43px]">
            Our recent Work
          </h1>
          <div className="w-[512.1px] relative text-[14px] tracking-[-0.02em] leading-[20px] font-[Inter] text-[#605f5f] inline-block max-w-full">
            At Probatus, we have a structured and collaborative approach to
            project delivery that ensures successful outcomes for our clients.
            Our methodology is built on industry best practices, meticulous
            planning, and a commitment to quality at every stage of the project
            lifecycle.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full text-left text-[20px] text-[#101010] ">
          <div className="self-stretch flex flex-row items-center justify-start gap-[32px] max-w-full  mq1400:flex-wrap">
            <div className="w-[475px] flex flex-col items-start justify-start gap-[16px] min-w-[475px] max-w-full mq825:min-w-full mq1400:flex-1">
              <img
                className="self-stretch h-[485px] relative rounded-[8px] max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/frame-11@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                <h3 className="m-[0px] self-stretch relative text-inherit leading-[24px] font-normal font-[inherit] mq450:text-[16px] mq450:leading-[19px]">
                  Pet Health Management App
                </h3>
                <div className="self-stretch relative text-[16px] tracking-[0.02em] leading-[24px] capitalize font-[Inter] text-[#4d4d4d]">{`PetPal's mobile app simplifies the process of finding and consulting veterinarians, offering a user-friendly interface and robust functionality. `}</div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[502px] max-w-full mq825:min-w-full">
              <img
                className="self-stretch h-[485px] relative rounded-[8px] max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/frame-12@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                <h3 className="m-[0px] self-stretch relative text-inherit leading-[24px] font-normal font-[inherit] mq450:text-[16px] mq450:leading-[19px]">
                  InnoTech - SaaS Platform UI/UX
                </h3>
                <div className="self-stretch relative text-[16px] tracking-[0.02em] leading-[24px] capitalize font-[Inter] text-[#4d4d4d]">
                  With InnoTech, we focused on creating a user-centric interface
                  for their SaaS platform. Our design process is centered around
                  the end-user, ensuring that the platform is not only
                  functional but also engaging and easy to navigate
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[32px] max-w-full  mq1400:flex-wrap">
            <div className="w-[733px] flex flex-col items-start justify-start gap-[16px] min-w-[733px] max-w-full lg:min-w-full mq1400:flex-1">
              <img
                className="self-stretch h-[485px] relative rounded-[8px] max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/frame-111@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px] min-h-[148px] max-w-full">
                <h3 className="m-[0px] self-stretch relative text-inherit leading-[24px] font-normal font-[inherit] mq450:text-[16px] mq450:leading-[19px]">
                  TechNest - Website Redesign
                </h3>
                <div className="w-[540.4px] relative text-[16px] tracking-[0.02em] leading-[24px] capitalize font-[Inter] text-[#4d4d4d] inline-block max-w-full">
                  TechNest’s website redesign project involved a complete
                  overhaul to enhance user engagement and brand consistency. Our
                  design and development teams collaborated closely to deliver a
                  site that is both visually appealing and technically sound.
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[335px] max-w-full">
              <img
                className="self-stretch h-[485px] relative rounded-[8px] max-w-full overflow-hidden shrink-0 object-cover"
                alt=""
                src="/frame-11-1@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                <h3 className="m-[0px] self-stretch relative text-inherit leading-[24px] font-normal font-[inherit] mq450:text-[16px] mq450:leading-[19px]">
                  Veterinary App Development
                </h3>
                <div className="self-stretch relative text-[16px] tracking-[0.02em] leading-[24px] capitalize font-[Inter] text-[#4d4d4d]">
                  PetPal’s mobile app simplifies the process of finding and
                  consulting veterinarians, offering a user-friendly interface
                  and robust functionality. Our development team at Invently is
                  dedicated to building apps that meet the needs of both
                  businesses and their customers.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
