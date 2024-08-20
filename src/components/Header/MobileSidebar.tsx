import React from "react";
import BookButton from "./BookButton";
import { NavbarProps } from "./navbar";

interface MobileSidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  navigationItems: NavbarProps["navigationItems"];
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({
  isSidebarOpen,
  toggleSidebar,
  navigationItems,
}) => (
  <div
    className={`md:hidden fixed top-0 left-0 right-0 h-[50vh] bg-[url('/public/component-1@3x.png')] transform ${
      isSidebarOpen ? "translate-y-0" : "-translate-y-full"
    } transition-transform duration-300 ease-in-out z-40`}
  >
    <div className="flex flex-col h-full p-4">
      {/* Close button */}
      <button
        className="self-end text-white absolute top-4 right-4 bg-transparent"
        onClick={toggleSidebar}
        aria-label="Close menu"
      >
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Logo at the top-left */}
      <div className="absolute top-4 left-4">
        <img
          className="h-11 w-32 object-cover"
          loading="lazy"
          alt="Logo"
          src="/artboard-5-2@2x.png"
        />
      </div>

      {/* Navigation Items */}
      <nav className="flex flex-col items-center justify-center mt-16 gap-6 text-center font-semibold text-gray-300">
        {navigationItems.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className="relative leading-5 hover:text-white text-white font-semibold inline-block no-underline"
            onClick={toggleSidebar}
          >
            {item.name}
          </a>
        ))}
      </nav>

      {/* Book a Call button at the bottom */}
      <div className=" flex justify-center h-10 pt-10">
        <BookButton />
      </div>
    </div>
  </div>
);

export default MobileSidebar;
