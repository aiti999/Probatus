// CallToActionButton.tsx
import React from 'react';

const CallToActionButton: React.FC = () => (
  <div className="h-9 flex flex-col items-start justify-start pt-2 pb-0 pr-2 box-border">
    <button className="cursor-pointer border border-solid border-gray-900 py-1.5 px-3 bg-[rgba(31,30,30,1)] h-8 rounded-lg flex flex-row items-start justify-start gap-1.5">
      <a className="hover:border-neutral-600 no-underline relative text-sm leading-5 capitalize font-inter text-gray-200 inline-block min-w-20" href="#book">
        Book a Call
      </a>
      <div className="pt-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
      </div>
    </button>
  </div>
);

export default CallToActionButton;
