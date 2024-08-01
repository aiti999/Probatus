import { FunctionComponent } from "react";
import AboutUs from "./AboutUs";

export type AboutType = {
  className?: string;
};

const About: FunctionComponent<AboutType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-start justify-start p-20 box-border max-w-full z-[1] text-left text-21xl text-gray1-200 font-franie mq800:pl-10 mq800:pr-10 mq800:box-border mq1150:pt-[52px] mq1150:pb-[52px] mq1150:box-border ${className}`}
    >
      <AboutUs />
    </section>
  );
};

export default About;
