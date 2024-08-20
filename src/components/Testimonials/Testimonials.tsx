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
  return (
    <section
      id="testimonial"
      className={`flex flex-col items-center justify-start relative left-0 pb-[102px] box-border max-w-full text-left text-[16px] text-[#605f5f] font-[Inter] ${className}`}
    >
      <div className="absolute bottom-24 w-[55%] h-[437px] rounded-[12px] z-[0] bg-gradient-to-r from-green-300 to-yellow-200 mq450:w-[370px] mq450:h-[450px] mq450:top-[158px] mq450:left-[10px] mq450:opacity-[0.32]"></div>
      <Splide
  options={{
    type: 'loop',
    perPage: 3,
    focus: 'center',
    gap: '3rem',
    pagination: false,
    breakpoints: {
      768: {
        perPage: 1,
        gap: '1rem',
        padding: '1rem',
      },
    },
  }}
  hasTrack={false}
  className="w-full mq450:w-full mq450:h-[672px] px-4 mq450:top-20"
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
  <div className="splide__arrows flex justify-center mt-4 relative left-4 top-8 mq450:left-[5%] mq450:top-[40%]">
    <button className="splide__arrow splide__arrow--prev bg-white text-black px-5 py-4 rounded-md mx-2 top-[22%] left-[46%] mq450:left-[30%] mq450:top-[2%]">
      <img src="/frame-5.svg" alt="Previous" className="w-8 h-8 mq450:w-6 mq450:h-6"/>
    </button>
    <button className="splide__arrow splide__arrow--next bg-white text-black px-5 py-4 rounded-md mx-2 top-[23%] right-[45%]">
      <img src="/frame-6.svg" alt="Next" className="w-8 h-8 mq450:w-6 mq450:h-6"/>
    </button>
  </div>
</Splide>

    </section>
  );
};

export default Testimonial;
