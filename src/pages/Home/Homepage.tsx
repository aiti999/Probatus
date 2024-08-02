import { FunctionComponent } from "react";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Process from "../../components/Process";
import FrameComponent from "../../components/FrameComponent";
import Form from "../../components/Form";
import Footer from "../../components/Footer";
import AboutUs from "../../components/AboutUs";
import Testimonials from "../../components/Testimonials";

const Homepage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Hero />
      <AboutUs/>
      <Services
        contactFormFlexWrap="wrap"
        group42_1="/group-42.svg"
        group42_2="/group-421.svg"
        group42_3="/group-42-1.svg"
        group42_4="/group-42-2.svg"
        uIUXDesign1="UI UX Design"
        uIUXDesign2="Web Development"
        uIUXDesign3="Mobile App Development"
        uIUXDesign4="Software Development"
      />
      <Process />
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
      <Testimonials />
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
      <Footer/>
    </div>
  );
};

export default Homepage;
