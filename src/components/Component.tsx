import { FunctionComponent } from "react";

export type ComponentType = {
  className?: string;
};

const Component: FunctionComponent<ComponentType> = ({ className = "" }) => {
  return (
    <header
      className={`mt-[-192px] self-stretch overflow-hidden flex flex-row items-start justify-start py-[18px] px-[80px] box-border bg-[url('/public/component-1@3x.png')] bg-cover bg-no-repeat bg-[top] top-[-192] z-[99] sticky max-w-full mq825:pl-[40px] mq825:pr-[40px] mq825:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
        <img
          className="h-[44px] w-[124px] relative object-cover"
          loading="lazy"
          alt=""
          src="/artboard-5-2@2x.png"
        />
        <nav className="m-[0px] flex flex-col items-start justify-start pt-[12px] px-[0px] pb-[0px] box-border max-w-full mq825:hidden">
          <nav className="m-[0px] flex flex-row items-start justify-start gap-[15.6px] text-center text-[14px] text-[#e0dfe1] font-[Inter]">
            <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit] inline-block min-w-[41px]">
              About
            </a>
            <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit] inline-block min-w-[59px]">
              Services
            </a>
            <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit] inline-block min-w-[54px]">
              Process
            </a>
            <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit] inline-block min-w-[77px]">
              Testimonial
            </a>
            <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit] inline-block min-w-[95px] whitespace-nowrap">
              Why Probatus
            </a>
          </nav>
        </nav>
        <div className="h-[38px] flex flex-col items-start justify-start pt-[6px] px-[0px] pb-[0px] box-border">
          <button className="cursor-pointer border-[#1f1e1e] border-[1px] border-solid py-[6px] px-[12px] bg-[#171717] h-[34px] rounded-[12px] box-border flex flex-row items-start justify-start gap-[5px]">
            <a className="[text-decoration:none] relative text-[14px] leading-[20px] capitalize font-[Inter] text-[#e0dfe1] text-left inline-block min-w-[77px] whitespace-nowrap">
              Book a Call
            </a>
            <div className="flex flex-col items-start justify-start pt-[7px] px-[0px] pb-[0px]">
              <div className="w-[6px] h-[6px] relative rounded-[50%] bg-[#12ec2d]" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Component;
