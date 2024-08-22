import React from 'react';

const BookButton: React.FC = () => (
  <button className="cursor-pointer border border-solid bg-color-rgba(23, 23, 23, 1) border-gray-900 py-1.5 px-3 bg-[rgba(23,23,23,1)] rounded-lg flex items-center justify-center gap-2 mq450:w-[21.5rem]">
    <a className="hover:border-neutral-600 no-underline relative text-sm leading-5 capitalize text-gray-200" href="#book">
      Book a Call
    </a>
    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
  </button>
);

export default BookButton;
