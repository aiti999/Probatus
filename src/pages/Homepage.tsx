import { FunctionComponent } from "react";
import Hero from "../components/Hero";
import About1 from "../components/About1";
import Services from "../components/Services";
import Process1 from "../components/Process1";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import Form from "../components/Form";
import Footer1 from "../components/Footer1";

const Homepage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Hero />
      <About1 />
      <Services
        contactFormFlexWrap="wrap"
        group42="/group-42.svg"
        group42="/group-421.svg"
        group42="/group-42-1.svg"
        group42="/group-42-2.svg"
        uIUXDesign="UI UX Design"
        uIUXDesign="Web Development"
        uIUXDesign="Mobile App Development"
        uIUXDesign="Software Development"
      />
      <Process1 />
      <FrameComponent
        whyChooseUs="/why-choose-us1@2x.png"
        whyChooseUsHeight="593px"
        whyChooseUsMinHeight="593px"
        whyProbatusContentGap="18px"
      />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[74px] box-border max-w-full text-center text-lg text-gray-600 font-franie">
        <div className="w-[580px] flex flex-col items-start justify-start gap-2 max-w-full">
          <div className="self-stretch relative leading-[30px]">
            Testimonial
          </div>
          <h1 className="m-0 self-stretch relative text-23xl leading-[48px] font-normal font-[inherit] text-gray-900 mq800:text-15xl mq800:leading-[38px] mq450:text-6xl mq450:leading-[29px]">
            Our clients say about us
          </h1>
        </div>
      </section>
      <FrameComponent1 />
      <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-20">
        <div className="w-24 flex flex-row items-start justify-between gap-5">
          <img
            className="h-8 w-8 relative overflow-hidden shrink-0 min-h-[32px]"
            alt=""
            src="/frame-5.svg"
          />
          <img
            className="h-8 w-8 relative overflow-hidden shrink-0 object-contain min-h-[32px]"
            alt=""
            src="/frame-6.svg"
          />
        </div>
      </div>
      <Form />
      <Footer1 />
    </div>
  );
};

export default Homepage;
