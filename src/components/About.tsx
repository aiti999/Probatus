import { FunctionComponent } from "react";
import AboutUs from "./AboutUs";

export type AboutType = {
  className?: string;
};

const About: FunctionComponent<AboutType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-start justify-start p-[80px] box-border max-w-full z-[2] text-left text-[40px] text-[#212121] font-[Franie] mq825:pl-[40px] mq825:pr-[40px] mq825:box-border mq450:pt-[52px] mq450:pb-[52px] mq450:box-border ${className}`}
    >
      <AboutUs />
    </section>
  );
};

export default About;
