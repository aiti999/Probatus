import { FunctionComponent } from "react";

export type FormType = {
  className?: string;
};

const Form: FunctionComponent<FormType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-[#fcfcfc] border-[#d4d4e7] border-t-[1px] border-solid box-border overflow-hidden flex flex-col items-center justify-center pt-[78px] px-[80px] pb-[80px] max-w-full text-left text-[40px] text-[#212121] font-[Franie] mq825:pt-[51px] mq825:px-[40px] mq825:pb-[52px] mq825:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] lg:flex-wrap lg:justify-center">
        <div className="w-[464px] flex flex-col items-start justify-start gap-[8px] min-w-[464px] max-w-full lg:flex-1 mq825:min-w-full">
        <h1
      style={{ fontSize: '56px', lineHeight: '72px' }}
      className="m-[0px] self-stretch relative text-inherit tracking-[-0.02em] font-normal font-[inherit] inline-block min-h-[168px] mq825:text-[32px] mq825:leading-[45px] mq450:text-[24px] mq450:leading-[34px]"
    >
      Please fill out the form to get in touch with us.
    </h1>
          <div className="w-[406px] relative text-[16px] leading-[24px] font-[Inter] text-[#605f5f] flex items-center max-w-full">
            Have a question or need assistance? Fill out the form below, and
            we'll get back to you promptly. Your inquiries are important to us,
            and we look forward to hearing from you
          </div>
        </div>
        <div className="w-[503px] flex flex-col items-end justify-start gap-[32px] min-w-[503px] max-w-full text-[14px] text-[#605f5f] font-[Inter] lg:flex-1 gap-[16px] mq825:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full">
            <div className="self-stretch rounded-[4px] bg-[#f8f8f8] border-[#e6e6e6] border-[1px] border-solid box-border flex flex-row items-center justify-start py-[8px] px-[7px] max-w-full">
              <input
                className="w-full [border:none] [outline:none] font-medium font-[Inter] text-[14px] bg-[transparent] h-[20px] flex-1 relative leading-[20px] text-[#605f5f] text-left inline-block min-w-[250px] max-w-full p-[0px]"
                placeholder="Name"
                type="text"
              />
            </div>
            <div className="self-stretch rounded-[4px] bg-[#f8f8f8] border-[#e6e6e6] border-[1px] border-solid box-border flex flex-row items-center justify-start py-[0px] pl-[0px] pr-[14px] gap-[8px] min-h-[40px] max-w-full">
              <h2 className="m-[0px] flex-1 pl-2 relative text-inherit leading-[20px] font-medium font-[inherit] inline-block max-w-[calc(100%_-_28px)]">
                Email address
              </h2>
              <img
                className="h-[20px] w-[20px] relative overflow-hidden shrink-0"
                alt=""
                src="/frame-7.svg"
              />
            </div>
            <div className="self-stretch rounded-[4px] bg-[#f8f8f8] border-[#e6e6e6] border-[1px] border-solid box-border flex flex-row items-center justify-start py-[8px] px-[7px] max-w-full">
              <input
                className="w-full [border:none] [outline:none] font-medium font-[Inter] text-[14px] bg-[transparent] h-[20px] flex-1 relative leading-[20px] text-[#605f5f] text-left inline-block min-w-[250px] max-w-full p-[0px]"
                placeholder="Phone number "
                type="text"
              />
            </div>
            <div className="self-stretch rounded-[4px] bg-[#f8f8f8] border-[#e6e6e6] border-[1px] border-solid box-border flex flex-row items-center justify-start py-[0px] pl-[0px] pr-[14px] gap-[8px] min-h-[40px] max-w-full">
              <h2 className="m-[0px] flex-1 pl-2 relative text-inherit leading-[20px] font-medium font-[inherit] inline-block max-w-[calc(100%_-_28px)]">
                Select Your Service
              </h2>
              <img
                className="h-[20px] w-[20px] relative"
                loading="lazy"
                alt=""
                src="/frame2.svg"
              />
            </div>
            <input type="text"
              className="border-[#e6e6e6] border-[1px] pb-20 border-solid bg-[#f8f8f8] h-[130px] w-auto [outline:none] self-stretch rounded-[4px] box-border flex flex-row items-start justify-start py-[10px] px-[8px] font-[Inter] font-medium text-[14px] text-[#605f5f]"
              placeholder="Message"
              />
          
          </div>
          <button className="cursor-pointer border-[#1b1b1b] border-[1px] border-solid py-[10px] px-[20px] bg-[#212121] self-stretch shadow-[0px_0px_0px_4px_rgba(33,_33,_33,_0.12),_0px_-2px_0px_#151515_inset,_0px_2px_0px_#343434_inset] rounded-[12px] overflow-hidden flex flex-row items-end justify-center hover:bg-[#545454] hover:border-[#4d4d4d] hover:border-[1px] hover:border-solid hover:box-border">
            <div className="relative text-[16px] tracking-[-0.01em] leading-[24px] font-medium font-[Inter] text-[#fff] text-left">
              Get Free Quotation
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Form;
