import { FunctionComponent } from "react";

export type Card1Type = {
  className?: string;
  oval?: string;
  title?: string;
  description?: string;
  userName?: string;
  userTitle?: string;
  iconSrc?: string;
};

const Card1: FunctionComponent<Card1Type> = ({
  className = "",
  oval,
  title = "Client D's mobile app project was in need of a revamp. Probatus revamped the app's UI/UX design, resulting in a 30% increase in user retention and a 20% boost in app ratings. Client D's app is now a user-favorite, driving higher engagement and satisfaction.",
  description = "Client D's mobile app project was in need of a revamp. Probatus revamped the app's UI/UX design, resulting in a 30% increase in user retention and a 20% boost in app ratings. Client D's app is now a user-favorite, driving higher engagement and satisfaction.",
  userName = "Leslie Alexander",
  userTitle = "Freelance React Developer",
  iconSrc = "/favourite31.svg",
}) => {
  return (
    <div
      className={`w-[514px] bg-[#fff] border-[#f3efff] border-[1px] border-solid box-border shrink-0 flex flex-col items-start justify-start py-[50px] px-[31px] max-w-full text-left text-[16px] text-[#605f5f] font-[Inter] mq825:w-[calc(100%_-_40px)] ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[32px]">
        <img
          className="w-[96px] h-[16px] relative"
          loading="lazy"
          alt="Icon"
          src={iconSrc}
        />
        <div className="self-stretch relative leading-[28px]">
          {description}
        </div>
        <div className="w-[236px] h-[54px] flex flex-row items-center justify-start text-[#18181b] font-[Franie]">
          <img
            className="h-[120px] w-[120px] rounded-full object-cover"
            loading="lazy"
            alt="User"
            src={oval}
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
            <b className="self-stretch relative leading-[28px]">
              {userName}
            </b>
            <div className="relative text-[14px] leading-[22px] font-[Inter] text-[#52525b]">
              {userTitle}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
