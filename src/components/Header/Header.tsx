import React from 'react';
import Navbar from './navbar';



const navigationItems = [
  { name: 'About', minWidth: 41 },
  { name: 'Services', minWidth: 59 },
  { name: 'Process', minWidth: 54 },
  { name: 'Testimonial', minWidth: 77 },
  { name: 'Why Probatus', minWidth: 95 },
];

const Header: React.FC = () => {
  return (
    <header className={`fixed top-0 left-0 right-0 self-stretch opacity-96 pt-10 overflow-hidden flex flex-row items-start justify-between py-6 px-20 md:px-10 lg:px-20 xl:px-30 bg-[url('/public/component-1@3x.png')] bg-cover bg-no-repeat bg-top z-50 max-w-full`}>
      
      <div className='pt-4'>
        <Navbar navigationItems={navigationItems} />
      </div>
      
    </header>
  );
};

export default Header;
