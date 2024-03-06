"use client";
import { useState } from "react";
import NavLink from "next/link";
const MobileNavigationBar = () => {
  const [isOpen, setOpened] = useState(false);

  const closeMenu = () => {
    setOpened(false);
  };

  return (
    <nav className="flex justify-between items-center bg-bg text-secondBg p-4">
      <div>
        <NavLink href="/">LOGO</NavLink>
      </div>
      <button
        onClick={() => setOpened(!isOpen)}
        className="hover:text-myPurple-600"
      >
        MENU
      </button>
      {isOpen && (
        <ul
          className={`absolute z-30 w-screen text-4xl h-screen  flex flex-col gap-5 justify-center overflow-y-hidden items-center top-[0] left-[0] bg-bg text-secondBg animate-fade `}
        >
          <li className="cursor-pointer" onClick={closeMenu}>
            <NavLink
              className="transition-all duration-300  hover:text-myPurple-600"
              href="/about-us"
            >
              About Us
            </NavLink>
          </li>
          <li className="cursor-pointer" onClick={closeMenu}>
            <NavLink
              className="transition-all duration-300 hover:text-myPurple-600"
              href="/our-services"
            >
              Services
            </NavLink>
          </li>
          <li className="cursor-pointer" onClick={closeMenu}>
            <NavLink
              className="transition-all duration-300 hover:text-myPurple-600"
              href="/careers"
            >
              Careers
            </NavLink>
          </li>
          <li className="cursor-pointer" onClick={closeMenu}>
            <NavLink
              className="transition-all duration-300 hover:text-myPurple-600"
              href="/contact-us"
            >
              Contact Us
            </NavLink>
          </li>
          <button
            className="absolute z-10 top-4 right-2 text-2xl p-2 hover:text-myPurple-600"
            onClick={closeMenu}
          >
            Close
          </button>
        </ul>
      )}
      
    </nav>
  );
};
export default MobileNavigationBar;
