import { FunctionComponent, ReactNode } from "react";

export type FooterSectionType = {
  title: string;
  children: ReactNode;
};

const FooterSection: FunctionComponent<FooterSectionType> = ({
  title,
  children,
}) => (
  <div className="flex flex-col items-start justify-start gap-[16px]">
    <div className="relative leading-[28px] font-semibold">{title}</div>
    <div>{children}</div>
  </div>
);

export type ContactInfoType = {
  email: string;
  phone: string;
};

const ContactInfo: FunctionComponent<ContactInfoType> = ({ email, phone }) => (
  <FooterSection title="Contact Info">
    <div className="flex flex-col items-start justify-start gap-[10px] text-center text-[14px] text-[#e0dfe1]">
      <div className="relative leading-[20px] font-medium inline-block min-w-[123px] whitespace-nowrap">
        {email}
      </div>
      <div className="self-stretch relative leading-[20px] font-medium text-left whitespace-nowrap">
        {phone}
      </div>
    </div>
  </FooterSection>
);

export type SocialLinksType = {
  links: { href: string; src: string; alt: string }[];
};

const SocialLinks: FunctionComponent<SocialLinksType> = ({ links }) => (
  <FooterSection title="Connect With Us">
    <div className="flex flex-row items-start justify-start pt-[1px] px-[0px] pb-[18px] gap-[15px]">
      {links.map(({ href, src, alt }, index) => (
        <a key={index} href={href} target="blank">
          <img
            className="h-[24px] w-[24px] relative overflow-hidden shrink-0 min-h-[24px]"
            loading="lazy"
            alt={alt}
            src={src}
          />
        </a>
      ))}
    </div>
  </FooterSection>
);

export type NewsletterType = {
  placeholder: string;
  buttonText: string;
};

const Newsletter: FunctionComponent<NewsletterType> = ({
  placeholder,
  buttonText,
}) => (
  <FooterSection title="Newsletter">
    <div className="self-stretch relative text-[14px] pb-5 leading-[20px] text-[#e0dfe1]">
      Stay updated with the latest news and offers. Subscribe to <br /> our newsletter.
    </div>
    <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full text-[#a6a6a6]">
      <div className="self-stretch rounded-[8px] bg-[#212121] border-[#282828] border-[1px] border-solid box-border flex flex-row items-center justify-center gap-[8px] min-h-[44px] whitespace-nowrap max-w-full cursor-pointer">
        <input
          type="text"
          className="m-[0px] flex-1 pl-3 relative text-inherit leading-[20px] font-normal font-[inherit] inline-block bg-transparent border-none focus:outline-none"
          placeholder={placeholder}
        />
        <img
          className="h-[20px] pr-3 w-[20px] relative overflow-hidden shrink-0"
          alt=""
          src="/frame-8.svg"
        />
      </div>

      <button className="cursor-pointer border-[#0e5a17] border-[1px] border-solid py-[10px] px-[20px] bg-[#39d24c] self-stretch shadow-[0px_8px_8px_#5ee16e_inset,_0px_3px_0px_#0a4516,_0px_3px_3.8px_#11f12d_inset,_0px_4px_4px_#04c41c_inset,_3px_3px_2.2px_rgba(38,_38,_38,_0.25)_inset] rounded-[12px] overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-[#1fba33] hover:border-[#36803d] hover:border-[1px] hover:border-solid hover:box-border">
        <div className="relative text-[16px] leading-[20px] font-medium font-[Inter] text-[#021c05] text-left">
          {buttonText}
        </div>
      </button>
    </div>
  </FooterSection>
);

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch overflow-hidden flex flex-col items-start justify-start pt-[64px] px-[0px] pb-[0px] box-border lg:gap-[20px] gap-[196px]  bg-[url('/public/footer@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[1] text-left text-[16px] text-[#fff] font-[Inter] mq825:pt-[42px] mq825:box-border ${className}`}
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

          <div className="flex flex-col gap-[20px]">
            <ContactInfo email="hello@Probatus.in" phone="+918266947784" />
            <SocialLinks
              links={[
                { href: "https://www.linkedin.com", src: "/linkedinboxline.svg", alt: "LinkedIn" },
                { href: "https://www.instagram.com", src: "/instagramline.svg", alt: "Instagram" },
                { href: "https://www.facebook.com", src: "/facebookcircleline.svg", alt: "Facebook" },
                { href: "https://twitter.com", src: "/twitterxline.svg", alt: "Twitter" },
              ]}
            />
          </div>

          <Newsletter
            placeholder="Enter Your email"
            buttonText="Explore Our Services"
          />
        </div>
      </div>
      <div className="self-stretch bg-[#060606] overflow-hidden flex flex-row items-start justify-between py-[8px] px-[100px] gap-[20px] text-[14px] text-[#aeaeae] font-[Geist] mq825:flex-wrap mq825:pl-[50px] mq825:pr-[50px] mq825:box-border mq450:pl-[20px] mq450:pr-[20px] mq450:box-border">
        <div className="w-[260.2px] mq450:pl-[10px] relative leading-[26px]  font-medium inline-block shrink-0">
          © Copyright 2024, All Rights Reserved
        </div>
        <div className="w-[256.1px] relative leading-[26px] mq450:pl-[10px] font-medium whitespace-pre-wrap inline-block shrink-0">{`Privacy Policy   Terms & Conditions`}</div>
      </div>
    </footer>
  );
};

export default Footer;
