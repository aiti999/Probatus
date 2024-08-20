import { FunctionComponent } from "react";
import Input from "./InputField";
import Button from "./Button";

export type FormType = {
  className?: string;
};

const Form: FunctionComponent<FormType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-[#fcfcfc] border-[#d4d4e7] border-t-[1px] border-solid box-border overflow-hidden flex flex-col items-center justify-center pt-[78px] px-[80px] pb-[80px] max-w-full text-left text-[40px] text-[#212121] font-[Franie] mq825:pt-[51px] mq825:px-[40px] mq825:pb-[52px] mq825:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] lg:flex-wrap lg:justify-center">
        <div className="w-[464px] flex flex-col items-start justify-start gap-[4px] min-w-[464px] max-w-full lg:flex-1 mq825:min-w-full">
          <h1
            style={{ fontSize: "54px", lineHeight: "52px" }}
            className="m-[0px] self-stretch relative text-inherit tracking-[-0.02em] font-normal font-[inherit] inline-block min-h-[168px] mq825:text-[32px] mq825:leading-[45px] mq450:text-[20px] mq450:leading-[32px]"
          >
            Please fill out the form to get in touch with us.
          </h1>
          <div className="w-[406px] relative text-[16px] leading-[24px] font-[Inter] text-[#605f5f] flex items-center max-w-full">
            Have a question or need assistance? Fill out the form below, and
            we'll get back to you promptly. Your inquiries are important to us,
            and we look forward to hearing from you.
          </div>
        </div>
        <div className="w-[503px] flex flex-col items-end justify-start gap-[8px] min-w-[503px] max-w-full text-[14px] text-[#605f5f] font-[Inter] lg:flex-1 mq825:min-w-full">
          <Input placeholder="Name" />
          <Input placeholder="Email address" iconSrc="/frame-7.svg" />
          <Input placeholder="Phone number" />
          <Input placeholder="Select Your Service" iconSrc="/frame2.svg" />
          <textarea
            className="border-[#e6e6e6] border-[1px] pb-20 border-solid resize-none bg-[#f8f8f8] h-[130px] w-auto [outline:none] self-stretch rounded-[4px] box-border flex flex-row items-start justify-start py-[10px] px-[8px] font-[Inter] font-medium text-[14px] text-[#605f5f]"
            placeholder="Message"
          />
          <Button>Get Free Quotation</Button>
        </div>
      </div>
    </section>
  );
};

export default Form;
