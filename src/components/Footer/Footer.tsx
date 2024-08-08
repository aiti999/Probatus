import { FunctionComponent } from "react";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch overflow-hidden flex flex-col items-start justify-start pt-[64px] px-[0px] pb-[0px] box-border gap-[196px] bg-[url('/public/footer@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[1] text-left text-[16px] text-[#fff] font-[Inter]  mq825:pt-[42px] mq825:box-border  ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-[0px] px-[80px] box-border max-w-full mq825:pl-[40px] mq825:pr-[40px] mq825:box-border">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] lg:flex-wrap">
          <div className="w-[319.8px] flex flex-col items-start justify-start gap-[16px] text-[#e0dfe1]">
            <img
              className="w-[180.4px] h-[64px] relative object-cover"
              alt=""
              src="/artboard-5-2-1@2x.png"
            />
            <div className="self-stretch relative leading-[24px]">
              Probatus is a leading provider of web app development, mobile app
              development, IT consulting, and SaaS solutions. With a focus on
              quality, reliability, and client satisfaction, we deliver
              innovative and tailored solutions that drive business success.
            </div>
          </div>
          <div className="w-[157px] flex flex-col items-start justify-start gap-[32px] font-[Franie]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <div className="w-[118px] relative leading-[28px] font-semibold inline-block">
                Contact Info
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-center text-[14px] text-[#e0dfe1] font-[Inter]">
                <div className="relative leading-[20px] font-medium inline-block min-w-[123px] whitespace-nowrap">
                  hello@Probatus.in
                </div>
                <div className="self-stretch relative leading-[20px] font-medium text-left whitespace-nowrap">
                  +918266947784
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative leading-[28px] font-semibold">
                Connect With Us
              </div>
              <div className="flex flex-row items-start justify-start pt-[0px] px-[0px] pb-[3px] gap-[18px]">
                <a href="https://www.linkedin.com" target="blank">
                  <img
                    className="h-[24px] w-[24px] relative overflow-hidden shrink-0 min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/linkedinboxline.svg"
                  />
                </a>
                <a href="https://www.instagram.com" target="blank">
                  <img
                    className="h-[24px] w-[24px] relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/instagramline.svg"
                  />
                </a>
                <a href="https://www.facebook.com" target="_blank">
                  <img
                    className="h-[24px] w-[24px] relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/facebookcircleline.svg"
                  />
                </a>
                <a href="https://twitter.com" target="blank">
                  <img
                    className="h-[24px] w-[24px] relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/twitterxline.svg"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-[400px] flex flex-col items-start justify-start gap-[16px] max-w-full">
            <div className="self-stretch relative leading-[20px] font-semibold font-[Franie]">
              Newsletter
            </div>
            <div className="self-stretch relative text-[14px] leading-[20px] text-[#e0dfe1]">
              Stay updated with the latest news and offers. Subscribe to our
              newsletter.
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full text-[#a6a6a6]">
              <div className="self-stretch rounded-[8px] bg-[#212121] border-[#282828] border-[1px] border-solid box-border flex flex-row items-center justify-center gap-[8px] min-h-[44px] whitespace-nowrap max-w-full cursor-pointer">
                <input
                  type="text"
                  className="m-[0px] flex-1 pl-3 relative text-inherit leading-[20px] font-normal font-[inherit] inline-block bg-transparent border-none focus:outline-none"
                  placeholder="Enter Your email"
                />
                <img
                  className="h-[20px] pr-3 w-[20px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/frame-8.svg"
                />
              </div>

              <button className="cursor-pointer border-[#0e5a17] border-[1px] border-solid py-[10px] px-[20px] bg-[#39d24c] self-stretch shadow-[0px_8px_8px_#5ee16e_inset,_0px_3px_0px_#0a4516,_0px_3px_3.8px_#11f12d_inset,_0px_4px_4px_#04c41c_inset,_3px_3px_2.2px_rgba(38,_38,_38,_0.25)_inset] rounded-[12px] overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-[#1fba33] hover:border-[#36803d] hover:border-[1px] hover:border-solid hover:box-border">
                <div className="relative text-[16px] leading-[20px] font-medium font-[Inter] text-[#021c05] text-left">
                  Explore Our Services
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-[#060606] overflow-hidden flex flex-row items-start justify-between py-[8px] px-[100px] gap-[20px] text-[14px] text-[#aeaeae] font-[Geist] mq825:flex-wrap mq825:pl-[50px] mq825:pr-[50px] mq825:box-border mq450:pl-[20px] mq450:pr-[20px] mq450:box-border">
        <div className="w-[260.2px] relative leading-[26px] font-medium inline-block shrink-0">
          © Copyright 2024, All Rights Reserved
        </div>
        <div className="w-[256.1px] relative leading-[26px] font-medium whitespace-pre-wrap text-right inline-block shrink-0">{`Privacy Policy   Terms & Conditions`}</div>
      </div>
    </footer>
  );
};

export default Footer;
