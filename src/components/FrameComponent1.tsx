import { FunctionComponent } from "react";
import Card1 from "./Card1";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`flex flex-row items-start justify-start pt-[0px] px-[0px] pb-[102px] box-border max-w-full text-left text-[16px] text-[#605f5f] font-[Inter] mq450:pb-[66px] mq450:box-border ${className}`}
    >
      <div className="flex flex-row items-start justify-start relative max-w-full">
        <div className="h-[450px] w-[807px] absolute !m-[0] bottom-[-70px] left-[calc(50%_-_403.5px)] rounded-[12px] [background:linear-gradient(90deg,_rgba(68,_255,_154,_0.32),_rgba(93,_199,_149,_0.32)_23.44%,_rgba(72,_255,_68,_0.32)_48.96%,_rgba(184,_255,_68,_0.32)_73.96%,_rgba(235,_255,_112,_0.32))]" />
        <div className="w-[1440px] overflow-x-auto shrink-0 flex flex-row items-center justify-center py-[0px] px-[0px] box-border gap-[32px] max-w-full z-[1] gap-[16px]">
          <Card1 oval="/oval@2x.png" />
          <Card1 oval="/oval-1@2x.png" />
          <Card1 oval="/oval@2x.png" />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
