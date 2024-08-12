import React, { FunctionComponent, useState } from 'react';
// import Hamburger from 'hamburger-react'
import { GiHamburgerMenu } from "react-icons/gi";

export type NavbarProps = {
  navigationItems: { name: string; minWidth: number }[];
  className?: string;
};

const Navbar: FunctionComponent<NavbarProps> = ({ navigationItems, className = '' }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    
    
  };

  return (
    <header className={`fixed top-0 left-1 right-12 py-5 px-12 z-50 bg-opacity-85 flex items-center justify-between ${className}`}>
      <div><img
        className="h-11 w-32 object-cover"
        loading="lazy"
        alt="Logo"
        src="/artboard-5-2@2x.png"
      />
      </div>
      
      {/* Desktop Navigation */}
      <nav className="flex mq450:hidden flex-row items-center pr-12 justify-end gap-10 text-center font-semibold text-gray-300">
        {navigationItems.map((item) => (
          <a
            key={item.name}
            className="relative leading-5 cursor-pointer hover:text-white font-semibold text-inherit inline-block no-underline"
          >
            {item.name}
          </a>
        ))}
      <div>  <button className="cursor-pointer border border-solid bg-color-rgba(23, 23, 23, 1) border-gray-900 py-1.5 px-3 ml-44 bg-gray-800 rounded-lg flex flex-row items-center justify-center gap-2">
          <a className="hover:border-neutral-600 no-underline relative text-sm leading-5 capitalize text-gray-200 inline-block" href="#book">
            Book a Call
          </a>
          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
        </button>
        </div>
      </nav>

      {/* Mobile Hamburger Button */}
      <button className="ss:hidden text-white relative  bg-transparent z-50" onClick={toggleSidebar} aria-label="Toggle menu">

        {/* <svg
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
        </svg> */}
        <GiHamburgerMenu className='w-8 h-8' />
      </button>
      
      {/* Mobile Sidebar */}
      <div className={`md:hidden fixed top-0 right-0 h-1/2 w-[27rem] bg-[url('/public/component-1@3x.png')]  transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-40`}>
        <div className="flex flex-col h-full p-4">
          <button
            className="self-end text-white absolute bg-black mb-8"
            onClick={toggleSidebar}
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="flex flex-col items-center justify-center relative top-24 gap-6 text-center font-semibold text-gray-300">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                className="relative leading-5 hover:text-white font-semibold text-inherit inline-block no-underline"
                onClick={toggleSidebar}
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className="mt-auto">
            <button className="cursor-pointer border mb-20 ml-16 border-solid left-16 border-gray-900 py-1.5 px-1 bg-gray-800 rounded-lg flex flex-row items-center justify-center gap-1.5 w-2/3">
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
