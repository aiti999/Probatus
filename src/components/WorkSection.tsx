import { FunctionComponent } from "react";

export type WorkSectionType = {
  className?: string;
};

const WorkSection: FunctionComponent<WorkSectionType> = ({ className = "" }) => {
  const workItems = [
    {
      title: "Pet Health Management App",
      description: "PetPal's mobile app simplifies the process of finding and consulting veterinarians, offering a user-friendly interface and robust functionality.",
      imageUrl: "/frame-11@2x.png",
    },
    {
      title: "InnoTech - SaaS Platform UI/UX",
      description: "With InnoTech, we focused on creating a user-centric interface for their SaaS platform. Our design process is centered around the end-user, ensuring that the platform is not only functional but also engaging and easy to navigate.",
      imageUrl: "/frame-12@2x.png",
    },
    {
      title: "TechNest - Website Redesign",
      description: "TechNest’s website redesign project involved a complete overhaul to enhance user engagement and brand consistency. Our design and development teams collaborated closely to deliver a site that is both visually appealing and technically sound.",
      imageUrl: "/frame-111@2x.png",
    },
    {
      title: "Veterinary App Development",
      description: "PetPal’s mobile app simplifies the process of finding and consulting veterinarians, offering a user-friendly interface and robust functionality. Our development team at Invently is dedicated to building apps that meet the needs of both businesses and their customers.",
      imageUrl: "/frame-11-1@2x.png",
    },
  ];

  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-center justify-start py-[64px] px-[80px] box-border max-w-full z-[1] text-center text-[56px] text-[#212121] font-[Franie] ${className}`}
    >
      <div className="flex-1 flex flex-col items-center justify-start gap-[64px] max-w-full">
        <div className="w-full flex flex-col items-center justify-center gap-[6px]">
          <h1 className="m-[0px] self-stretch relative text-inherit tracking-[-0.02em] leading-[72px] font-normal font-[inherit] mq825:text-[45px] mq825:leading-[58px] mq450:text-[40px] mq450:leading-[43px]">
            Our Recent Work
          </h1>
          <div className="relative text-[14px] tracking-[-0.02em] leading-[20px] font-[Inter] text-[#605f5f] max-w-full text-center mx-auto">
            <p className="ss:max-w-[600px]  ss:mx-auto mq450:p-0 leading-[28px] font-[Inter] text-[16px]">
              At Probatus, we have a structured and collaborative approach to project delivery that ensures successful outcomes for our clients. Our methodology is built on industry best practices, meticulous planning, and a commitment to quality at every stage of the project lifecycle.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-[32px] ss:w-full w-[24rem] mq450:flex-col">
          {workItems.map((item, index) => (
            <div key={index} className="w-[calc(50%-16px)] flex flex-col items-start justify-start gap-[16px] mq450:w-full">
              <img
                className="w-full h-[485px] rounded-[8px] object-cover mq450:h-auto"
                loading="lazy"
                alt={item.title}
                src={item.imageUrl}
              />
              <div className="flex flex-col items-start justify-start gap-[4px] text-left">
                <h3 className="m-[0px] text-[24px] leading-[24px] font-normal">
                  {item.title}
                </h3>
                <div className="text-[16px] tracking-[0.02em] leading-[24px] capitalize font-[Inter] text-[#4d4d4d]">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
