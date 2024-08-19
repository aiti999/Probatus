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
      width: "475px", // Specific width for large screens
    },
    {
      title: "InnoTech - SaaS Platform UI/UX",
      description: "With InnoTech, we focused on creating a user-centric interface for their SaaS platform. Our design process is centered around the end-user, ensuring that the platform is not only functional but also engaging and easy to navigate.",
      imageUrl: "/frame-12@2x.png",
      width: "773px", // Specific width for large screens
    },
    {
      title: "TechNest - Website Redesign",
      description: "TechNest’s website redesign project involved a complete overhaul to enhance user engagement and brand consistency. Our design and development teams collaborated closely to deliver a site that is both visually appealing and technically sound.",
      imageUrl: "/frame-111@2x.png",
      width: "773px", // Specific width for large screens
    },
    {
      title: "Veterinary App Development",
      description: "PetPal’s mobile app simplifies the process of finding and consulting veterinarians, offering a user-friendly interface and robust functionality. Our development team at Invently is dedicated to building apps that meet the needs of both businesses and their customers.",
      imageUrl: "/frame-11-1@2x.png",
      width: "487px", // Specific width for large screens
    },
  ];

  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-center justify-start py-[64px] px-[80px] box-border max-w-full z-[1] text-center text-[56px] text-[#212121] font-[Franie] ${className} mq450:py-[32px] mq450:px-[20px]`}
    >
      <div className="flex-1 flex flex-col items-center justify-start gap-[64px] mq450:gap-[3px] max-w-full">
        <div className="w-full flex flex-col items-center justify-center gap-[6px] mq450:gap-[0px]">
          <h1 className="m-[0px] self-stretch relative text-inherit tracking-[-0.02em] leading-[72px] font-normal font-[inherit] mq825:text-[45px] mq825:leading-[58px] mq450:text-[40px] mq450:leading-[43px]">
            Our Recent Work
          </h1>
          <div className="relative text-[14px] tracking-[-0.02em] leading-[20px] font-[Inter] text-[#605f5f] max-w-full text-center mx-auto">
            <p className="ss:max-w-[512px] ss:mx-auto mq450:p-3 text-center leading-[20px] font-[Inter] text-[14px]">
              At Probatus, we have a structured and collaborative approach to project delivery that ensures successful outcomes for our clients. Our methodology is built on industry best practices, meticulous planning, and a commitment to quality at every stage of the project lifecycle.
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-between gap-[16px] w-full mq450:flex-col mq450:items-center">
          {workItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-start gap-[16px] w-full sm:w-auto"
              style={{
                maxWidth: item.width, // Max width for larger screens
              }}
            >
              <img
                className="rounded-[8px] object-cover w-full h-auto max-h-[485px]"
                loading="lazy"
                alt={item.title}
                src={item.imageUrl}
              />
              <div className="flex flex-col items-start justify-start gap-[4px] text-left" style={{width: "100%", padding: "0"}}>
                <h3 className="m-[0px] text-[24px] leading-[24px] font-normal mq450:text-[20px]">
                  {item.title}
                </h3>
                <div className="text-[16px] tracking-[0.02em] leading-[24px] capitalize font-[Inter] text-[#4d4d4d] mq450:text-[14px]">
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
