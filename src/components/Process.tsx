import { FunctionComponent } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Icon,
  Typography,
} from "@mui/material";

export type ProcessType = {
  className?: string;
};

const Process: FunctionComponent<ProcessType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-white overflow-hidden flex flex-col items-start justify-start py-[108px] px-20 box-border max-w-full text-left text-37xl text-gray1-200 font-franie mq800:py-[70px] mq800:px-10 mq800:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 mq450:flex-wrap">
        <div className="w-[547px] flex flex-col items-start justify-start gap-4 min-w-[547px] max-w-full mq800:min-w-full mq450:flex-1">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[72px] font-normal font-[inherit] mq800:text-26xl mq800:leading-[58px] mq1150:text-15xl mq1150:leading-[43px]">
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
        <div className="w-[632px] flex flex-col items-start justify-start min-w-[632px] max-w-full text-5xl text-gray1-300 lg:min-w-full mq450:flex-1">
          <Accordion className="self-stretch max-w-full">
            <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
              <Typography />
            </AccordionSummary>
            <AccordionDetails>
              <Typography />
            </AccordionDetails>
          </Accordion>
          <Accordion className="self-stretch min-h-[72px] max-w-full gap-5">
            <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
              <Typography>{`Development And Implementation `}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Website development and implementation involves designing,
                coding, testing, and deploying online platforms to achieve
                specific goals.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <div className="self-stretch border-darkslategray-500 border-b-[1px] border-solid box-border flex flex-row items-center justify-between min-h-[72px] max-w-full gap-5">
            <h3 className="m-0 w-[420px] relative text-inherit leading-[24px] capitalize font-normal font-[inherit] flex items-center max-w-[calc(100%_-_44px)] mq1150:text-lgi mq1150:leading-[19px]">
              Quality Assurance and Testing
            </h3>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/frame-2.svg"
            />
          </div>
          <div className="self-stretch border-darkslategray-500 border-b-[1px] border-solid box-border flex flex-row items-center justify-between min-h-[72px] max-w-full gap-5">
            <h3 className="m-0 w-[343px] relative text-inherit leading-[24px] capitalize font-normal font-[inherit] flex items-center max-w-[calc(100%_-_44px)] mq1150:text-lgi mq1150:leading-[19px]">
              Deployment and Launch
            </h3>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/frame-2.svg"
            />
          </div>
          <div className="self-stretch border-darkslategray-500 border-b-[1px] border-solid box-border flex flex-row items-center justify-between min-h-[72px] max-w-full gap-5">
            <h3 className="m-0 w-[545px] relative text-inherit leading-[24px] capitalize font-normal font-[inherit] flex items-center max-w-[calc(100%_-_44px)] mq1150:text-lgi mq1150:leading-[19px]">
              Post-Launch Support and Maintenance
            </h3>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/frame-2.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
