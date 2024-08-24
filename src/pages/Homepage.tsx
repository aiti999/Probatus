import React, { FunctionComponent } from "react";
import HeroBackground from "../components/Hero/HeroBackground";
import Services from "../components/Services";
import WorkSection from "../components/WorkSection";
import Process from "../components/Process";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonial from "../components/Testimonials/Testimonials";
import Form from "../components/Form/Form";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import AboutUs from "../components/AboutUs";

const Homepage: FunctionComponent = () => {
  return (
    <>
      <Header />
      <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border leading-normal tracking-normal font-sans">
        <section className="self-stretch ss:h-[812px] h-[580px] flex flex-col items-start justify-start pt-[191px] pb-[254px] box-border gap-[112px] bg-[url('/public/hero@3x.png')] bg-cover bg-no-repeat bg-top mix-blend-linear-burn max-w-full lg:pt-[124px] lg:pb-[165px] lg:gap-[56px] mq825:pt-[81px] mq825:pb-[107px] mq825:gap-[28px]">
          <HeroBackground />
        </section>
        <AboutUs />
        <Services />
        <WorkSection />
        <Process />
        <WhyChooseUs />

        <Testimonial />
        <Form />
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
