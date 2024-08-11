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
  title,
  description,
  userName,
  userTitle,
  iconSrc,
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
        <div className="self-stretch relative text-[24px] font-bold leading-[28px] text-[#18181b]">
          {title}
        </div>
        <div className="self-stretch relative leading-[28px]">
          {description}
        </div>
        <div className="w-[236px] h-[54px] flex flex-row items-center justify-start text-[#18181b] font-[Franie]">
          <img
            className="h-[140px] w-[140px] rounded-full object-cover mr-4"
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

export default Card;
