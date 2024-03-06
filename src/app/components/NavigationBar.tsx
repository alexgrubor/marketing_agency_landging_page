'use client'
import { useState, useEffect } from 'react';
import NavLink from "next/link";
import LetsChatButton from './ui/LetsChatButton';

const NavigationBar = () => {
  
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsSticky(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const navBarStyle: React.CSSProperties = {
    position: 'sticky',
    top: '0',
    backgroundColor: !isSticky ? '#010101' : 'transparent',
    transition: 'background-color 0.3s ease',
  };
  return (
    <nav className="flex justify-between items-center p-4 shadow-sm shadow-secondBg text-white text-2xl z-30" style={navBarStyle}>
      <div>
        <NavLink href="/">LOGO</NavLink>
      </div>
      <ul className="flex gap-6">
        <li>
          <NavLink
            className="transition-all duration-300 hover:text-myPurple-600"
            href="/about-us"
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            className="transition-all duration-300 hover:text-myPurple-600"
            href="/our-services"
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            className="transition-all duration-300 hover:text-myPurple-600"
            href="/careers"
          >
            Careers
          </NavLink>
        </li>
        <li>
        <LetsChatButton href='/contact-us' text="Let's Chat"/>
        </li>
      </ul>
    </nav>
  );
};
export default NavigationBar;
