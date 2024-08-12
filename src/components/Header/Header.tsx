import React from 'react';
import NavBar from '../NavBar';
import Logo from '../Logo';
import CallToActionButton from '../CallToActionButton';

const navigationItems = [
  { name: 'About', minWidth: 41 },
  { name: 'Services', minWidth: 59 },
  { name: 'Process', minWidth: 54 },
  { name: 'Testimonial', minWidth: 77 },
  { name: 'Why Probatus', minWidth: 95 },
];

const Header: React.FC = () => {
  return (
   <header className={`fixed bg-black top-0 left-0 right-0 self-stretch opacity-100 overflow-hidden flex flex-row items-start justify-between py-4 px-20 md:px-10 lg:px-20 xl:px-30 bg-[url('/public/component-1@3x.png')] bg-cover bg-no-repeat bg-top z-50 max-w-full`}>
  <Logo src="/artboard-5-2@2x.png" alt="Logo" />
  <div className='pt-4'>
    <NavBar items={navigationItems} />
  </div>
  <CallToActionButton />
</header>

  );
};

export default Header;
