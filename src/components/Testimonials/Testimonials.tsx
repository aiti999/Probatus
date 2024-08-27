import { FunctionComponent } from "react";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Card from "./Card";

export type TestimonialType = {
  className?: string;
};

const cardData = [
  {
    oval: "card.png",
    description:
      "Client D's mobile app project was in need of a revamp. Probatus revamped the app's UI/UX design, resulting in a 30% increase in user retention and a 20% boost in app ratings. Client D's app is now a user-favorite, driving higher engagement and satisfaction.",
    userName: "Leslie Alexander",
    userTitle: "Freelance React Developer",
    iconSrc: "/favourite31.svg",
  },
  {
    oval: "card.png",
    description:
      "Client D's mobile app project was in need of a revamp. Probatus revamped the app's UI/UX design, resulting in a 30% increase in user retention and a 20% boost in app ratings. Client D's app is now a user-favorite, driving higher engagement and satisfaction.",
    userName: "Harry Alexander",
    userTitle: "React Native Developer",
    iconSrc: "/favourite31.svg",
  },
  {
    oval: "card.png",
    description:
      "Client D's mobile app project was in need of a revamp. Probatus revamped the app's UI/UX design, resulting in a 30% increase in user retention and a 20% boost in app ratings. Client D's app is now a user-favorite, driving higher engagement and satisfaction.",
    userName: "John Alexander",
    userTitle: "Angular Developer",
    iconSrc: "/favourite31.svg",
  },
  // Add more card data as needed
];

const Testimonial: FunctionComponent<TestimonialType> = ({ className = "" }) => {
  const testimonialData = {
    title: "Testimonials",
    heading: "Our clients say about us",
  };

  return (
    <section
      id="testimonial"
      className={`flex flex-col items-center justify-start relative left-0 pb-[6.375rem] box-border max-w-full text-left text-[1rem] mq450:h-[760px] text-[#605f5f] font-[Inter] ${className}`}
    >
        <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[54px] box-border max-w-full text-center text-gray-600 Font-franie">
        <div className="w-[580px] flex flex-col items-start justify-start gap-2 max-w-full">
          <div className="self-stretch relative text-[18px] leading-1 mq450:text-[1.13rem]">
            {testimonialData.title}
          </div>
          <h1 className="m-0 self-stretch relative text-[42px] leading-[64px] font-normal font-inherit text-gray-900 mq825:text-4xl mq825:leading-[60px] mq450:text-4xl mq450:leading-[2.75rem]">
  {testimonialData.heading}
</h1>

        </div>
      </section>
      <div className="absolute bottom-24 w-[55%] h-[26.3125rem] top-[8rem] opacity-[62%] rounded-[0.75rem] z-[0] bg-gradient-to-r from-green-300 to-yellow-200 mq450:w-[26rem] mq450:h-[30.125rem] mq450:top-[10rem] mq450:opacity-[52%]"></div>
      <Splide
  options={{
    type: 'loop',
    perPage: 3,
    focus: 'center',
    gap: '1.875rem',
    pagination: false,
    breakpoints: {
      768: {
        perPage: 1,
        gap: '0.625rem',
        padding: '1rem',
      },
    },
  }}
  hasTrack={false}
  className="w-full mq450:w-full mq450:h-[28rem] px-4 mq450:top-[1rem] mq450:left-[.1rem]"
>
  <SplideTrack>
    {cardData.map((card, index) => (
      <SplideSlide key={index}>
        <Card
          oval={card.oval}
          description={card.description}
          userName={card.userName}
          userTitle={card.userTitle}
          iconSrc={card.iconSrc}
          className="mq450:w-full"
        />
      </SplideSlide>
    ))}
  </SplideTrack>
  <div className="splide__arrows flex justify-center mt-10 relative top-10 mq450:left-[5%] mq450:top-[14%]">
  <button className="splide__arrow splide__arrow--prev bg-transparent px-[1.25rem] py-[1rem] rounded-md mx-2 top-[22%] left-[46%] mq450:left-[30%] mq450:top-[2%]">
    <img src="/frame-5.svg" alt="Previous" className="w-8 h-8 mq450:w-[2rem] mq450:h-[2rem]"/>
  </button>
  <button className="splide__arrow splide__arrow--next bg-transparent px-[1.25rem] py-[1rem] rounded-md mx-2 top-[23%] right-[45%]">
    <img src="/frame-6.svg" alt="Next" className="w-8 h-8 mq450:w-[2rem] mq450:h-[2rem]"/>
  </button>
</div>

</Splide>

    </section>
  );
};

export default Testimonial;
