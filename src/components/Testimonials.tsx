import { FunctionComponent, useState } from "react";
import Card from "./Card";

export type TestimonialType = {
  className?: string;
};

const socialIcons = [
  { alt: "Frame 5", src: "/frame-5.svg", direction: "prev" },
  { alt: "Frame 6", src: "/frame-6.svg", direction: "next" },
];

const cardData = [
  {
    oval: "Oval.svg",
    description:
      "Client D's mobile app project was in need of a revamp. Probatus revamped the app's UI/UX design, resulting in a 30% increase in user retention and a 20% boost in app ratings. Client D's app is now a user-favorite, driving higher engagement and satisfaction.",
    userName: "Leslie Alexander",
    userTitle: "Freelance React Developer",
    iconSrc: "/favourite31.svg",
  },
  {
    oval: "Oval.svg",
    description:
      "Client D's mobile app project was in need of a revamp. Probatus revamped the app's UI/UX design, resulting in a 30% increase in user retention and a 20% boost in app ratings. Client D's app is now a user-favorite, driving higher engagement and satisfaction.",
    userName: "Leslie Alexander",
    userTitle: "Freelance React Developer",
    iconSrc: "/favourite31.svg",
  },
  {
    oval: "Oval.svg",
    description:
      "Client D's mobile app project was in need of a revamp. Probatus revamped the app's UI/UX design, resulting in a 30% increase in user retention and a 20% boost in app ratings. Client D's app is now a user-favorite, driving higher engagement and satisfaction.",
    userName: "Leslie Alexander",
    userTitle: "Freelance React Developer",
    iconSrc: "/favourite31.svg",
  },
];

const Testimonial: FunctionComponent<TestimonialType> = ({
  className = "",
}) => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNavigation = (direction: string) => {
    if (direction === "next") {
      setStartIndex((prevIndex) =>
        prevIndex + 1 < cardData.length ? prevIndex + 1 : 0
      );
    } else {
      setStartIndex((prevIndex) =>
        prevIndex - 1 >= 0 ? prevIndex - 1 : cardData.length - 1
      );
    }
  };

  return (
    <section
      className={`flex flex-col items-center justify-start relative left-24 pb-[102px] box-border max-w-full text-left text-[16px] text-[#605f5f] font-[Inter] mq450:pb-[66px] mq450:box-border ${className}`}
    >
      <div className="flex flex-row items-start justify-start relative max-w-full">
        <div className="h-[450px] w-[807px] absolute !m-[0] bottom-[-70px] left-[calc(50%_-_403.5px)] rounded-[12px] [background:linear-gradient(90deg,_rgba(68,_255,_154,_0.32),_rgba(93,_199,_149,_0.32)_23.44%,_rgba(72,_255,_68,_0.32)_48.96%,_rgba(184,_255,_68,_0.32)_73.96%,_rgba(235,_255,_112,_0.32))]" />
        <div className="w-[1440px] shrink-0 flex flex-row items-center justify-center py-[0px] px-[0px] box-border overflow-y-hidden overflow-x-hidden max-w-full z-[1] gap-[16px]">
          {cardData.slice(startIndex, startIndex + 3).map((card, index) => (
            <Card
              key={index}
              oval={card.oval}
              description={card.description}
              userName={card.userName}
              userTitle={card.userTitle}
              iconSrc={card.iconSrc}
            />
          ))}
        </div>
      </div>
      <br />
      <div className="w-full flex flex-row items-center justify-center pt-14 px-5 pb-20">
        <div className="flex relative flex-row items-start gap-5">
          {socialIcons.map((icon) => (
            <img
              key={icon.alt}
              className="h-8 w-8 cursor-pointer"
              alt={icon.alt}
              src={icon.src}
              onClick={() => handleNavigation(icon.direction)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
