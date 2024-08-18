import { useState } from "react";
import { FunctionComponent } from "react";

export type ProcessType = {
  className?: string;
};

const Process: FunctionComponent<ProcessType> = ({ className = "" }) => {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <section id="process"
      className={`self-stretch bg-[#fff] overflow-hidden flex flex-col items-start justify-start py-[108px] px-[80px] box-border max-w-full text-left text-[56px] text-[#212121] font-[Franie] mq825:py-[70px] mq825:px-[40px] mq825:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1400:flex-wrap">
        <div className="w-[547px] flex flex-col items-start justify-start gap-[16px] min-w-[547px] max-w-full mq825:min-w-full mq1400:flex-1">
          <h1 className="m-[0px] self-stretch relative text-inherit tracking-[-0.02em] leading-[72px] font-normal font-[inherit] text-[56px] mq450:text-[50px] mq450:leading-[52px]">
            Our Approach to <br /> Project Delivery.
          </h1>
          <div className="w-[411px] relative text-[14px] tracking-[-0.02em] leading-[20px] font-[Inter] text-[#605f5f] inline-block max-w-full">
            At Probatus, we have a structured and collaborative approach to
            project delivery that ensures successful outcomes for our clients.
            Our methodology is built on industry best practices, meticulous
            planning, and a commitment to quality at every stage of the project
            lifecycle.
          </div>
        </div>
        <div className="w-[612px] flex flex-col items-start justify-start min-w-[632px] max-w-full text-[24px] text-[#1a1a1a] lg:min-w-full mq1400:flex-1">
          {[
            {
              title: "Discovery and Planning",
              content:
                "We begin by conducting a thorough discovery phase, collaborating closely with our clients to understand their vision, goals, and requirements. We analyze business objectives, define project scope, and create a detailed project plan outlining timelines, milestones, and deliverables.",
            },
            {
              title: "Development and Implementation",
              content:
                "During this phase, we focus on translating the project plan into actionable tasks. Our development team works on creating the necessary software, features, and integrations according to the project specifications.",
            },
            {
              title: "Quality Assurance and Testing",
              content:
                "We conduct comprehensive testing to ensure that the project meets quality standards and functions as intended. This phase includes unit testing, integration testing, and user acceptance testing.",
            },
            {
              title: "Deployment and Launch",
              content:
                "After thorough testing, we proceed with the deployment of the project. We handle the configuration, migration, and launch processes to ensure a smooth go-live experience.",
            },
            {
              title: "Post-Launch Support and Maintenance",
              content:
                "Post-launch, we provide ongoing support and maintenance to address any issues that arise, ensure optimal performance, and implement necessary updates.",
            },
          ].map((section, index) => (
            <div
              key={index}
              className="self-stretch border-[rgba(0,43,49,0.16)] border-b-[1px] border-solid box-border flex flex-col"
            >
              <div
                className="flex flex-row items-center justify-between py-[24px] px-[8px] cursor-pointer"
                onClick={() => toggleSection(index)}
              >
                <h2 className="m-[0px] relative text-inherit leading-[24px] capitalize  font-medium flex items-center max-w-[calc(100%_-_44px)] mq450:text-[19px] mq450:leading-[19px]">
                  {section.title}
                </h2>
                <div className="h-[24px] w-[24px] flex items-center justify-center relative overflow-hidden shrink-0">
                  {activeSection === index ? (
                    <span className="text-[28px] font-bold">-</span>
                  ) : (
                    <span className="text-[24px] font-bold ">+</span>
                  )}
                </div>
              </div>
              {activeSection === index && (
                <div className="px-[8px] pb-[22px] text-[16px] text-[#605f5f] font-[Inter]">
                  <div className="leading-[24px]">{section.content}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
