import { FunctionComponent } from "react";
import Component from "../components/Hero";

import About from "../components/About";
import Services from "../components/Services";
import WorkSection from "../components/WorkSection";
import Process from "../components/Process";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import Form from "../components/Form";
import Footer from "../components/Footer";

const Homepage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-[#fff] overflow-hidden flex flex-col items-start justify-start pt-[1px] px-[0px] pb-[0px] box-border leading-[normal] tracking-[normal]">
      <section className="self-stretch h-[812px] flex flex-col items-start justify-start pt-[191px] px-[0px] pb-[254px] box-border gap-[112px] bg-[url('/public/hero@3x.png')] bg-cover bg-no-repeat bg-[top] [mix-blend-mode:linear-burn] max-w-full lg:pt-[124px] lg:pb-[165px] lg:box-border gap-[56px] mq825:pt-[81px] mq825:pb-[107px] mq825:box-border gap-[28px]">
        <Component />
      </section>
      <About />
      <Services />
      <WorkSection />
      <Process />
      <FrameComponent />
      <section className="self-stretch flex flex-row items-start justify-center pt-[0px] px-[20px] pb-[74px] box-border max-w-full text-center text-[18px] text-[#52525b] font-[Franie]">
        <div className="w-[580px] flex flex-col items-start justify-start gap-[8px] max-w-full">
          <div className="self-stretch relative leading-[30px]">
            Testimonial
          </div>
          <h1 className="m-[0px] self-stretch relative text-[42px] leading-[48px] font-normal font-[inherit] text-[#18181b] mq825:text-[34px] mq825:leading-[38px] mq450:text-[25px] mq450:leading-[29px]">
            Our clients say about us
          </h1>
        </div>
      </section>
      <FrameComponent1 />
      <div className="self-stretch flex flex-row items-start justify-center pt-[0px] px-[20px] pb-[80px]">
        <div className="w-[96px] flex flex-row items-start justify-between gap-[20px]">
          <img
            className="h-[32px] w-[32px] relative overflow-hidden shrink-0 min-h-[32px]"
            alt=""
            src="/frame-5.svg"
          />
          <img
            className="h-[32px] w-[32px] relative overflow-hidden shrink-0 object-contain min-h-[32px]"
            alt=""
            src="/frame-6.svg"
          />
        </div>
      </div>
      <Form />
      <Footer />
    </div>
  );
};

export default Homepage;
