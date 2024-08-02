import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Card from "./ourServices";

export type ServicesType = {
  className?: string;
  group42?: string;
  uIUXDesign?: string;
  

  contactFormFlexWrap?: CSSProperties["flexWrap"];
};

const Services: FunctionComponent<ServicesType> = ({
  className = "ServicesType",
  contactFormFlexWrap,
  group42,
  uIUXDesign,
}) => {
  const contactFormStyle: CSSProperties = useMemo(() => {
    return {
      flexWrap: contactFormFlexWrap,
    };
  }, [contactFormFlexWrap]);

  return (
    <section
      className={`self-stretch bg-whitesmoke overflow-hidden flex flex-col items-start justify-start p-20 text-center text-21xl text-gray1-200 font-franie mq800:py-[52px] mq800:px-10 mq800:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-16 gap-8 gap-4">
        <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[56px] font-normal font-[inherit] mq800:text-13xl mq800:leading-[45px] mq1150:text-5xl mq1150:leading-[34px]">
          Our Services
        </h1>
        <div
          className="self-stretch flex flex-row items-start justify-between gap-5 text-left text-lg mq450:flex-wrap mq450:justify-center"
          style={contactFormStyle}
        >
          <Card group42={group42} uIUXDesign={uIUXDesign} />
          <Card
            propHeight="unset"
            group42={group42}
            uIUXDesign={uIUXDesign}
            propWidth="unset"
            propDisplay="unset"
            propAlignSelf="stretch"
          />
          <Card
            propHeight="296px"
            group42={group42}
            uIUXDesign={uIUXDesign}
            propWidth="unset"
            propDisplay="unset"
            propAlignSelf="stretch"
          />
          <Card
            propHeight="296px"
            group42={group42}
            uIUXDesign={uIUXDesign}
            propWidth="unset"
            propDisplay="unset"
            propAlignSelf="stretch"
          />
        </div>
        <button className="cursor-pointer [border:none] py-3 px-8 bg-gray1-200 rounded-xl flex flex-row items-end justify-center whitespace-nowrap hover:bg-dimgray-400">
          <div className="relative text-base tracking-[-0.01em] leading-[24px] font-medium font-body text-white text-left inline-block min-w-[86px]">
            Get started
          </div>
        </button>
      </div>
    </section>
  );
};

export default Services;
