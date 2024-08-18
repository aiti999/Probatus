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
  // Add more card data as needed...
];

const Testimonial: FunctionComponent<TestimonialType> = ({ className = "" }) => {
  return (
    <section
      id="testimonial"
      className={`flex flex-col items-center justify-start relative left-0 pb-[102px] box-border max-w-full text-left text-[16px] text-[#605f5f] font-[Inter] mq450:pb-[2px] mq450:box-border ${className}`}
    >
      <div className="absolute bottom-24 w-[55%] h-[437px]  rounded-[12px] z-[0] bg-gradient-to-r from-green-300 to-yellow-200 ..."></div>

      <Splide
        options={{
          type: 'loop',
          padding: '5rem',
          perPage: 3,
          gap: '3rem',
          pagination: false,
        }}
        hasTrack={false} // Disable the default track
        className="w-full"
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
              />
            </SplideSlide>
          ))}
        </SplideTrack>
        <div className="splide__arrows flex justify-center mt-4 relative left-4 top-8">
          <button className="splide__arrow splide__arrow--prev bg-white text-[24px] font-bold text-black px-5 py-4 rounded-md mx-2 top-[22%] left-[46%]">
            &#60;
          </button>
          <button className="splide__arrow splide__arrow--next bg-white text-[24px] font-bold text-black px-5 py-4 rounded-md mx-2 top-[23%] right-[45%]">
            &#62;
          </button>
        </div>
      </Splide>
    </section>
  );
};

export default Testimonial;
