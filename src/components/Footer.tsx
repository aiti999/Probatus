import { FunctionComponent } from "react";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch overflow-hidden flex flex-col items-start justify-start pt-16 px-0 pb-0 box-border gap-[196px] bg-[url('/public/footer@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[1] text-left text-base text-white font-body gap-[98px] mq800:pt-[42px] mq800:box-border gap-[49px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-20 box-border max-w-full mq800:pl-10 mq800:pr-10 mq800:box-border">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq450:flex-wrap">
          <div className="w-[296px] flex flex-col items-start justify-start gap-4 text-gainsboro">
            <img
              className="w-[180.4px] h-16 relative object-cover"
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
          <div className="w-[122px] flex flex-col items-start justify-start gap-4 font-franie">
            <div className="w-[118px] relative leading-[28px] font-semibold inline-block">
              Contact Info
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-4 text-center text-sm text-gainsboro font-body">
              <div className="relative leading-[20px] font-medium inline-block min-w-[122px] whitespace-nowrap">
                hello@Probatus.in
              </div>
              <div className="self-stretch relative leading-[20px] font-medium inline-block min-w-[122px] whitespace-nowrap">
                +918266947784
              </div>
            </div>
          </div>
          <div className="w-[157px] flex flex-col items-start justify-start gap-4 font-franie">
            <div className="self-stretch relative leading-[28px] font-semibold">
              Connect With Us
            </div>
            <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[3px] gap-[18px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/linkedinboxline.svg"
              />
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/instagramline.svg"
              />
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/facebookcircleline.svg"
              />
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/twitterxline.svg"
              />
            </div>
          </div>
          <div className="w-[400px] flex flex-col items-start justify-start gap-4 max-w-full">
            <div className="self-stretch relative leading-[20px] font-semibold font-franie">
              Newsletter
            </div>
            <div className="self-stretch relative text-sm leading-[20px] text-gainsboro">
              Stay updated with the latest news and offers. Subscribe to our
              newsletter.
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full text-lightslategray">
              <div className="self-stretch rounded-lg bg-gray1-500 border-gray1-400 border-[1px] border-solid box-border flex flex-row items-center justify-center gap-2 min-h-[44px] whitespace-nowrap max-w-full">
                <h3 className="m-0 flex-1 relative text-inherit leading-[20px] font-normal font-[inherit] inline-block max-w-[calc(100%_-_28px)]">
                  Enter Your email
                </h3>
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0"
                  alt=""
                  src="/frame-7.svg"
                />
              </div>
              <button className="cursor-pointer border-darkgreen border-[1px] border-solid py-2.5 px-5 bg-lime self-stretch shadow-[0px_8px_8px_rgba(255,_255,_255,_0.25)_inset,_0px_3px_0px_#0a4516,_0px_3px_3.8px_#11f12d_inset,_0px_4px_4px_#04c41c_inset,_3px_3px_2.2px_rgba(38,_38,_38,_0.25)_inset] rounded-xl overflow-hidden flex flex-row items-center justify-center hover:bg-limegreen hover:border-seagreen hover:border-[1px] hover:border-solid hover:box-border">
                <div className="relative text-base leading-[20px] font-medium font-body text-gray1-800 text-left inline-block min-w-[78px]">
                  Subscribe
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-gray1-500 overflow-hidden flex flex-row items-start justify-between py-2 px-[100px] gap-5 text-sm text-darkgray font-geist mq800:flex-wrap mq800:pl-[50px] mq800:pr-[50px] mq800:box-border mq1150:pl-5 mq1150:pr-5 mq1150:box-border">
        <div className="w-[260.2px] relative leading-[26px] font-medium inline-block shrink-0">
          © Copyright 2024, All Rights Reserved
        </div>
        <div className="w-[256.1px] relative leading-[26px] font-medium whitespace-pre-wrap text-right inline-block shrink-0">{`Privacy Policy   Terms & Conditions`}</div>
      </div>
    </footer>
  );
};

export default Footer;
