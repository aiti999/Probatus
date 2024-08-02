import { FunctionComponent } from "react";
import InputField from "./InputField";

export type FormType = {
  className?: string;
};

const Form: FunctionComponent<FormType> = ({ className = "form" }) => {
  return (
    <section
      className={`self-stretch bg-gray1-100 border-lavender-200 border-t-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-start pt-[78px] px-20 pb-20 max-w-full text-left text-21xl text-gray1-200 font-franie mq800:pt-[51px] mq800:px-10 mq800:pb-[52px] mq800:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 lg:flex-wrap lg:justify-center">
        <div className="w-[464px] flex flex-col items-start justify-start gap-2 min-w-[464px] max-w-full lg:flex-1 mq800:min-w-full">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[56px] font-normal font-[inherit] inline-block min-h-[168px] mq800:text-13xl mq800:leading-[45px] mq1150:text-5xl mq1150:leading-[34px]">
            Please fill out the form to get in touch with us.
          </h1>
          <div className="w-[406px] relative text-base leading-[24px] font-body text-dimgray-200 flex items-center max-w-full">
            Have a question or need assistance? Fill out the form below, and
            we'll get back to you promptly. Your inquiries are important to us,
            and we look forward to hearing from you
          </div>
        </div>
        <div className="w-[514px] flex flex-col items-start justify-start gap-8 min-w-[514px] max-w-full text-xs text-black-60 font-body lg:flex-1 gap-4 mq800:min-w-full">
          <div className="self-stretch flex flex-col items-end justify-start gap-6 max-w-full">
            <div className="self-stretch rounded-xl bg-white flex flex-row items-start justify-start max-w-full">
              <div className="h-[54px] w-[518px] relative rounded border-black-20 border-[3px] border-solid box-border hidden max-w-full" />
              <div className="h-3.5 hidden flex-row items-start justify-start py-0 pl-0 pr-4 box-border gap-[3px]">
                <img
                  className="h-[13px] w-[13px] relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/exclamation.svg"
                />
                <div className="self-stretch relative leading-[120%]">
                  Message
                </div>
              </div>
              <div className="flex-1 rounded-xl border-black-20 border-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-start py-2.5 px-[15px] max-w-full [row-gap:20px] mq800:flex-wrap">
                <div className="hidden flex-row items-start justify-start py-0 pl-0 pr-2">
                  <img
                    className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                    alt=""
                    src="/email-mail.svg"
                  />
                </div>
                <div className="h-[22px] w-px relative rounded-12xs bg-black hidden" />
                <input
                  className="w-32 [border:none] [outline:none] font-body text-base bg-[transparent] h-[22px] relative leading-[140%] text-black-60 text-left inline-block p-0"
                  placeholder="Enter Your Name"
                  type="text"
                />
                <div className="h-[22px] w-px relative rounded-12xs bg-black hidden" />
                <div className="h-[22px] flex-1 relative rounded-12xs min-w-[229px] max-w-full" />
                <img
                  className="h-[18px] w-[18px] relative hidden"
                  alt=""
                  src="/arrow-down.svg"
                />
              </div>
            </div>
            <div className="self-stretch rounded-xl bg-white flex flex-row items-start justify-start max-w-full">
              <div className="h-[46px] flex-1 rounded-xl flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border max-w-full mq800:h-auto">
                <div className="h-[54px] w-[520px] relative rounded border-black-20 border-[3px] border-solid box-border hidden max-w-full" />
                <div className="h-3.5 hidden flex-row items-start justify-start py-0 pl-0 pr-4 box-border gap-[3px]">
                  <img
                    className="h-[13px] w-[13px] relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/exclamation.svg"
                  />
                  <div className="self-stretch relative leading-[120%]">
                    Message
                  </div>
                </div>
                <div className="flex-1 rounded-xl border-black-20 border-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-start py-[11px] px-[15px] max-w-full [row-gap:20px] shrink-0 mq800:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-0.5 pb-0 pl-0 pr-2">
                    <img
                      className="w-[18px] h-[18px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/email-mail.svg"
                    />
                  </div>
                  <div className="h-[22px] w-px relative rounded-12xs bg-black hidden" />
                  <input
                    className="w-[106px] [border:none] [outline:none] font-body text-base bg-[transparent] h-[22px] relative leading-[140%] text-black-60 text-left inline-block p-0"
                    placeholder="Email address"
                    type="text"
                  />
                  <div className="h-[22px] w-px relative rounded-12xs bg-black hidden" />
                  <div className="h-[22px] flex-1 relative rounded-12xs min-w-[227px] max-w-full" />
                  <img
                    className="h-[18px] w-[18px] relative hidden"
                    alt=""
                    src="/arrow-down.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-xl flex flex-row items-start justify-start max-w-full">
              <div className="h-[54px] w-[518px] relative rounded border-black-20 border-[3px] border-solid box-border hidden max-w-full" />
              <div className="h-3.5 hidden flex-row items-start justify-start py-0 pl-0 pr-4 box-border gap-[3px]">
                <img
                  className="h-[13px] w-[13px] relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/exclamation.svg"
                />
                <div className="self-stretch relative leading-[120%]">
                  Message
                </div>
              </div>
              <div className="flex-1 rounded-xl bg-white border-black-20 border-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-start py-2.5 px-[15px] max-w-full [row-gap:20px] mq800:flex-wrap">
                <div className="hidden flex-row items-start justify-start py-0 pl-0 pr-2">
                  <img
                    className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                    alt=""
                    src="/email-mail.svg"
                  />
                </div>
                <div className="h-[22px] w-px relative rounded-12xs bg-black hidden" />
                <input
                  className="w-[194px] [border:none] [outline:none] font-body text-base bg-[transparent] h-[22px] relative leading-[140%] text-black-60 text-left inline-block p-0"
                  placeholder="Enter Your Phone number "
                  type="text"
                />
                <div className="h-[22px] w-px relative rounded-12xs bg-black hidden" />
                <div className="h-[22px] flex-1 relative rounded-12xs min-w-[186px]" />
                <img
                  className="h-[18px] w-[18px] relative hidden"
                  alt=""
                  src="/arrow-down.svg"
                />
              </div>
            </div>
            <InputField />
            <div className="self-stretch rounded-xl bg-white flex flex-row items-start justify-start max-w-full">
              <div className="h-[54px] w-[518px] relative rounded border-black-20 border-[3px] border-solid box-border hidden max-w-full" />
              <div className="h-3.5 hidden flex-row items-start justify-start py-0 pl-0 pr-4 box-border gap-[3px]">
                <img
                  className="h-[13px] w-[13px] relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/exclamation.svg"
                />
                <div className="self-stretch relative leading-[120%]">
                  Message
                </div>
              </div>
              <div className="flex-1 rounded-xl border-black-20 border-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-start py-2.5 px-[15px] max-w-full">
                <div className="hidden flex-row items-start justify-start py-0 pl-0 pr-2">
                  <img
                    className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                    alt=""
                    src="/email-mail.svg"
                  />
                </div>
                <div className="h-[22px] w-px relative rounded-12xs bg-black hidden" />
                <input
                  className="w-[469px] [border:none] [outline:none] font-body text-base bg-[transparent] h-36 relative leading-[140%] text-black-60 text-left inline-block max-w-[calc(100%_-_11px)] p-0"
                  placeholder="Enter Your Message"
                  type="text"
                />
                <div className="h-[22px] w-px relative rounded-12xs bg-black hidden" />
                <div className="h-[22px] w-[11px] relative rounded-12xs" />
                <img
                  className="h-[18px] w-[18px] relative hidden"
                  alt=""
                  src="/arrow-down.svg"
                />
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-3 px-5 bg-gray1-200 self-stretch rounded-xl flex flex-row items-start justify-center hover:bg-dimgray-400">
            <div className="relative text-base tracking-[-0.01em] leading-[24px] font-medium font-body text-white text-left">
              Get Free Quotation
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Form;
