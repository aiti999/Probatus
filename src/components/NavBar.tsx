// NavBar.tsx
import React from 'react';

export type NavBarProps = {
  items: { name: string; minWidth: number }[];
};

const NavBar: React.FC<NavBarProps> = ({ items }) => {
  return (
    <nav className="flex flex-row items-center justify-start gap-10 md:gap-5 text-center font-semibold text-gray-300">
    {items.map((item) => (
      <a key={item.name} style={{ minWidth: item.minWidth }} className="relative leading-5 hover:text-white font-semibold text-inherit inline-block no-underline" href={`#${item.name.toLowerCase()}`}>
        {item.name}
      </a>
    ))}
  </nav>
  
  );
};

export default NavBar;
