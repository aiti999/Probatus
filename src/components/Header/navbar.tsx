"use client"

import React, { FunctionComponent, useState } from 'react';

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

const Navbar: FunctionComponent<ComponentType> = ({ className = '' }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
<header className={`fixed top-0 left-0 right-0 py-4 md:px-20 px-4 z-50 bg-opacity-85 flex items-center justify-between ${className}`}>
<img
        className="h-11 w-32 object-cover"
        loading="lazy"
        alt="Logo"
        src="/artboard-5-2@2x.png"
      />
      
      {/* Desktop Navigation */}
      <nav className=" flex mq450:hidden flex-row items-center justify-end gap-10 text-center font-semibold text-gray-300">
      {navigationItems.map((item) => (
          <a
            key={item.name}
            className="relative leading-5 hover:text-white font-semibold text-inherit inline-block no-underline"
            // href={#${item.name.toLowerCase()}}
          >
            {item.name}
          </a>
        ))}
        <button className="cursor-pointer border border-solid border-gray-900 py-1.5 px-3 ml-44 bg-gray-800 rounded-lg flex flex-row items-center justify-center gap-1.5">
          <a className="hover:border-neutral-600 relative text-sm leading-5 capitalize font-inter text-gray-200 inline-block" href="#book">
            Book a Call
          </a>
          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
        </button>
      </nav>

      {/* Mobile Hamburger Button */}
      <button className="ss:hidden text-white z-50" onClick={toggleSidebar} aria-label="Toggle menu">

        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      
      {/* Mobile Sidebar */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-64 bg-black transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-40`}>
        <div className="flex flex-col h-full p-4">
          <button
            className="self-end text-white mb-8"
            onClick={toggleSidebar}
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="flex flex-col items-start justify-start gap-6 text-center font-semibold text-gray-300">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                className="relative leading-5 hover:text-white font-semibold text-inherit inline-block no-underline"
                // href={#${item.name.toLowerCase()}}
                onClick={toggleSidebar}
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className="mt-auto">
            <button className="cursor-pointer border border-solid border-gray-900 py-1.5 px-3 bg-gray-800 rounded-lg flex flex-row items-center justify-center gap-1.5 w-full">
              <a className="hover:border-neutral-600 relative text-sm leading-5 capitalize font-inter text-gray-200 inline-block" href="#book">
                Book a Call
              </a>
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="mq1400:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </header>
  );
};

export default Navbar;