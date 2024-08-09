import React, { FunctionComponent } from 'react';

export type ComponentType = {
  className?: string;
};

const navigationItems = [
  { name: 'About', minWidth: 41 },
  { name: 'Services', minWidth: 59 },
  { name: 'Process', minWidth: 54 },
  { name: 'Testimonial', minWidth: 77 },
  { name: 'Why Probatus', minWidth: 95 },
];

const Header: FunctionComponent<ComponentType> = ({ className = '' }) => {
  return (
    <header
      className={`fixed bg-black top-0 left-0 right-0 self-stretch opacity-98 overflow-hidden flex flex-row items-start justify-start py-4 px-20 bg-[url('/public/component-1@3x.png')] bg-cover bg-no-repeat bg-top z-50 max-w-full mq825:pl-10 mq825:pr-10 ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5">
        <img
          className="h-11 w-32 object-cover"
          loading="lazy"
          alt="Logo"
          src="/artboard-5-2@2x.png"
        />
        <nav className=" mq825:flex flex-col items-start justify-start pt-3 pb-0 box-border max-w-full">
          <div className="flex flex-row items-start  justify-start gap-10 text-center font-semibold text-gray-300 ">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                style={{ minWidth: item.minWidth }}
                className="relative leading-5 hover:text-white font-semibold text-inherit inline-block no-underline"
                href={`#${item.name.toLowerCase()}`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <div className="h-9 flex flex-col items-start justify-start pt-1.5 pb-0 box-border">
          <button className="cursor-pointer border border-solid border-gray-900 py-1.5 px-3 bg-gray-800 h-8 rounded-lg flex flex-row items-start justify-start gap-1.5">
            <a className="hover:border-neutral-600 no-underline relative text-sm leading-5 capitalize font-inter text-gray-200 inline-block min-w-20" href="#book">
              Book a Call
            </a>
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
