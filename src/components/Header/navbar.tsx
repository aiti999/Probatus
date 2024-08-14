import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import BookButton from './BookButton';
import MobileSidebar from './MobileSidebar';

export type NavbarProps = {
  navigationItems: { name: string; minWidth: number; link: string }[];
  className?: string;
};

const Navbar: React.FC<NavbarProps> = ({ navigationItems, className = '' }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 py-5 px-12 z-50 bg-opacity-105 flex items-center justify-between ${className}`}>
      {/* Logo */}
      <div>
        <img className="h-11 w-32 object-cover" loading="lazy" alt="Logo" src="/artboard-5-2@2x.png" />
      </div>

      {/* Navigation */}
      <nav className="flex-1 hidden ss:flex items-center justify-center gap-10 text-center font-semibold text-gray-300">
        {navigationItems.map((item) => (
          <a key={item.name} href={item.link} className="relative leading-5 cursor-pointer hover:text-white font-semibold text-inherit inline-block no-underline">
            {item.name}
          </a>
        ))}
      </nav>

      {/* Book a Call Button */}
      <div className="hidden ss:flex">
        <BookButton />
      </div>

      {/* Hamburger Menu for Mobile View */}
      <button className="ss:hidden text-white relative left-8 bg-transparent" onClick={toggleSidebar} aria-label="Toggle menu">
        <GiHamburgerMenu className='w-8 h-8' />
      </button>

      {/* Mobile Sidebar */}
      <MobileSidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} navigationItems={navigationItems} />

      {/* Overlay when Sidebar is Open */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30" onClick={toggleSidebar}></div>
      )}
    </header>
  );
};

export default Navbar;
