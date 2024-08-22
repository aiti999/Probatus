import { FunctionComponent } from "react";

export type CardType = {
  className?: string;
  oval?: string;
  title?: string;
  description?: string;
  userName?: string;
  userTitle?: string;
  iconSrc?: string;
};

const Card: FunctionComponent<CardType> = ({
  className = "",
  oval,
  description,
  userName,
  userTitle,
  iconSrc,
}) => {
  return (
    <div
      className={`w-[32.125rem] bg-[#fff] border-[#f3efff] border-[0.0625rem] border-solid box-border shrink-0 flex flex-col items-start justify-start py-[3.125rem] px-[1.9375rem] max-w-full text-left text-[1rem] text-[#605f5f] font-[Inter] mq825:w-[calc(100%_-_2.5rem)] mq450:h-[25.4rem] mq450:w-[24rem] ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.375rem]">
        <img
          className="w-[6rem] h-[1rem] relative"
          loading="lazy"
          alt="Icon"
          src={iconSrc}
        />
        <div className="self-stretch relative leading-[1.75rem] mq450:text-[1rem] mq450:leading-[1.75rem]">
          {description}
        </div>
        <div className="w-full flex flex-row items-center justify-start text-[#18181b] font-[Franie]">
          <img
            className="h-[2.5rem] w-[2.5rem] rounded-full object-cover mr-[1rem]"
            loading="lazy"
            alt="User"
            src={oval}
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem]">
            <b className="self-stretch relative text-[1rem] leading-[1.75rem]">
              {userName}
            </b>
            <div className="flex-1 flex flex-col items-start justify-start text-[0.875rem] leading-[1.375rem] font-[Inter] text-[#52525b]">
              {userTitle}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;