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
      className={`w-[514px] bg-[#fff] border-[#f3efff] border-[1px] border-solid box-border shrink-0 flex flex-col items-start justify-start py-[50px] px-[31px] max-w-full text-left text-[16px] text-[#605f5f] font-[Inter] mq825:w-[calc(100%_-_40px)] mq450:w-full ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[22px]">
        <img
          className="w-[96px] h-[16px] relative"
          loading="lazy"
          alt="Icon"
          src={iconSrc}
        />
        <div className="self-stretch relative leading-[28px] mq450:text-[14px] mq450:leading-[24px]">
          {description}
        </div>
        <div className="w-full flex flex-row items-center justify-start text-[#18181b] font-[Franie]">
          <img
            className="h-[40px] w-[40px] rounded-full object-cover mr-4"
            loading="lazy"
            alt="User"
            src={oval}
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
            <b className="self-stretch relative leading-[28px]">
              {userName}
            </b>
            <div className="flex-1 flex flex-col items-start justify-start text-[14px] leading-[22px] font-[Inter] text-[#52525b]">
              {userTitle}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
