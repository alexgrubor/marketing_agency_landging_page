'use client'
import { useState, useEffect } from 'react';
import NavLink from "next/link";

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
    <nav className="flex justify-between items-center p-4 text-white text-2xl" style={navBarStyle}>
      <div>
        <NavLink href="/">LOGO</NavLink>
      </div>
      <ul className="flex gap-6">
        <li>
          <NavLink
            className="transition-all duration-300 hover:text-myPurple-600"
            href="/about"
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            className="transition-all duration-300 hover:text-myPurple-600"
            href="/services"
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
          <NavLink
            className="bg-myPurple-600 p-2 border border-bg transition-all duration-300 hover:bg-bg hover:text-myPurple-600 hover:border-myPurple-600"
            href="/contact"
          >
            Let's chat
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavigationBar;
