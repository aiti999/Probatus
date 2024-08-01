import { FunctionComponent } from "react";

export type Card3Type = {
  className?: string;
};

const Card3: FunctionComponent<Card3Type> = ({ className = "" }) => {
  return (
    <div
      className={`w-[514px] bg-white border-lavender-100 border-[1px] border-solid box-border shrink-0 flex flex-col items-start justify-start py-[30px] px-[31px] max-w-full text-left text-base text-dimgray-200 font-body mq800:w-[calc(100%_-_40px)] ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-8 gap-4">
        <img
          className="w-24 h-4 relative"
          loading="lazy"
          alt=""
          src="/favourite31.svg"
        />
        <div className="self-stretch relative leading-[28px]">
          Client D's mobile app project was in need of a revamp. Probatus
          revamped the app's UI/UX design, resulting in a 30% increase in user
          retention and a 20% boost in app ratings. Client D's app is now a
          user-favorite, driving higher engagement and satisfaction.
        </div>
        <div className="w-[236px] h-[54px] flex flex-row items-center justify-start gap-3.5 text-gray-900 font-franie">
          <img
            className="h-11 w-11 relative rounded-[50%] object-cover"
            loading="lazy"
            alt=""
            src="/oval@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-1">
            <b className="self-stretch relative leading-[28px]">
              Leslie Alexander
            </b>
            <div className="relative text-sm leading-[22px] font-body text-gray-600">
              Freelance React Developer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
