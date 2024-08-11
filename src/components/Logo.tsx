// Logo.tsx
import React from 'react';

export type LogoProps = {
  src: string;
  alt: string;
};

const Logo: React.FC<LogoProps> = ({ src, alt }) => {
  return <img className="h-11 w-32 object-cover" loading="lazy" alt={alt} src={src} />;
};

export default Logo;
