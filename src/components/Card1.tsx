import { FunctionComponent } from "react";

export type Card1Type = {
  className?: string;
  oval?: string;
};

const Card1: FunctionComponent<Card1Type> = ({ className = "", oval }) => {
  return (
    <div
      className={`w-[514px] h-[400px] bg-white border-lavender-100 border-[1px] border-solid box-border shrink-0 flex flex-col items-start justify-start py-[30px] px-[31px] max-w-full text-left text-base text-dimgray-200 font-body mq800:w-[calc(100%_-_40px)] ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-8">
        <img
          className="w-24 h-4"
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
        <div className="w-[236px] h-[84px] flex items-center justify-start gap-2 text-gray-900 font-franie whitespace-nowrap">
    <img
        className="h-20 w-20 object-contain"
        src={oval}
    />
    <div className="">
        <b className="text-5xl font-bold">
            Leslie Alexander
        </b>
        <div className="relative text-sm font-body text-gray-600">
            Freelance React Developer
        </div>
    </div>
</div>


        </div>
      </div>
  
  );
};

export default Card1;
