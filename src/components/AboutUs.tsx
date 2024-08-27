import { FunctionComponent, useState, useEffect } from "react";

export type AboutUsType = {
  className?: string;
};

const buttonData = [
  {
    label: "Introduction",
    content:
      "At Probatus, we believe in the power of expertise and dedication. Our journey began with a vision to provide proven, tried, and tested solutions that empower businesses to achieve success. With a team of seasoned professionals and a commitment to quality, we've earned a reputation for delivering results that exceed expectations.",
  },
  {
    label: "Mission",
    content:
      "Our mission is to drive innovation and deliver solutions that create long-term value for our clients. We strive to be a trusted partner, providing exceptional service and leveraging our expertise to help businesses thrive in a competitive landscape.",
  },
  {
    label: "Core Values",
    content:
      "Integrity, Excellence, and Innovation are the core values that guide us in every aspect of our work. We are committed to maintaining the highest standards of professionalism and delivering outstanding results through continuous improvement and creativity.",
  },
  {
    label: "Key Strengths",
    content:
      "Our key strengths include a highly skilled team, a customer-centric approach, and a proven track record of successful project delivery. We excel in adapting to changing market demands and providing tailored solutions that meet our clients' unique needs.",
  },
];

const AboutUs: FunctionComponent<AboutUsType> = ({ className = "" }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");

  const handleClick = (index: number) => {
    setFadeClass("fade-out");
    setTimeout(() => {
      setSelectedIndex(index);
      setFadeClass("fade-in");
    }, 200); // Adjust the duration to match your fade-out timing
  };

  return (
    <section
      id="about"
      className={`self-stretch overflow-hidden flex flex-col items-start justify-start p-[80px] box-border max-w-full z-[2] text-left text-[40px] text-[#212121] Font-[Franie] mq825:pl-[40px] mq825:pr-[40px] mq825:box-border mq450:pt-[52px] mq450:pb-[52px] mq450:box-border ${className}`}
    >
      <div
        className={`self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-[40px] text-[#212121] Font-[Franie] mq1400:flex-wrap ${className}`}
      >
        <div className="flex flex-col items-start justify-start gap-[24px] min-w-[330px] max-w-full mq1400:flex-1">
          <h1 className="m-[0px] w-[208px] relative text-inherit tracking-[-0.02em] leading-[120%] font-normal font-[inherit] inline-block mq825:text-[32px] mq825:leading-[38px] mq450:text-[34px] mq450:leading-[32px]">
            <span>About Us</span>
            <span className="text-[#96fc04]">.</span>
          </h1>
          <div className="flex flex-col items-start justify-start gap-[8px]">
            {[0, 1].map((i) => (
              <div
                className="flex flex-row items-start justify-start gap-[8px]"
                key={i}
              >
                {buttonData.slice(i * 2, i * 2 + 2).map((button, index) => (
                  <button
                    key={button.label}
                    className={`cursor-pointer border-[1px] border-solid py-[10px] px-[22px] bg-[transparent] rounded-[32px] flex flex-row items-center justify-center hover:bg-[rgba(84,84,84,0.09)] ${
                      selectedIndex === i * 2 + index
                        ? "border-[#212121]"
                        : "border-[rgba(33,33,33,0.5)]"
                    }`}
                    onClick={() => handleClick(i * 2 + index)}
                    style={
                      button.label === "Key Strengths"
                        ? { minWidth: "180px" }
                        : {}
                    }
                  >
                    <div
                      className={`relative text-[16px] tracking-[-0.01em] leading-[24px] font-[Inter] ${
                        selectedIndex === i * 2 + index
                          ? "text-[#212121]"
                          : "text-[rgba(33,33,33,0.5)]"
                      } text-left inline-block min-w-[90px]`}
                    >
                      {button.label}
                    </div>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="w-[730px] flex flex-col items-start justify-start py-[0px] px-[0px] box-border gap-[24px] min-w-[730px] max-w-full lg:min-w-full mq1400:flex-1">
          <div
            className={`self-stretch flex flex-col items-start justify-start gap-[16px] ${fadeClass}`}
          >
            <h1 className="m-[0px] w-[272px] relative text-inherit tracking-[-0.02em] leading-[56px] font-normal font-[inherit] inline-block mq825:text-[32px] mq825:leading-[45px] mq450:text-[32px] mq450:leading-[34px]">
              {buttonData[selectedIndex].label}
            </h1>
            <div className="self-stretch relative text-[16px] tracking-[-0.02em] leading-[24px] font-[Inter] text-[#605f5f]">
              {buttonData[selectedIndex].content}
            </div>
          </div>
          <button>
            <div className="w-[154px] h-[48px] shadow-[0px_0px_0px_4px_rgba(33,_33,_33,_0.12),_0px_-2px_0px_#151515_inset,_0px_2px_0px_#343434_inset] rounded-[12px] bg-[#212121] border-[#1b1b1b] border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-end justify-center gap-[4px] text-[16px] text-[#fff] font-[Inter] mq450:w-[348px] mq450:h-[56px]">
              <h2 className="m-[0px] cursor-pointer relative pb-3 text-inherit tracking-[-0.01em] leading-[24px] font-medium font-[inherit] inline-block min-w-[66px] mq450:text-[18px] mq450:pb-4">
                Discover
              </h2>
              <img
                className="h-[20px] w-[20px] pb-3 relative overflow-hidden shrink-0 mq450:h-[24px] mq450:w-[24px] mq450:pb-4"
                loading="lazy"
                alt=""
                src="/frame.svg"
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
