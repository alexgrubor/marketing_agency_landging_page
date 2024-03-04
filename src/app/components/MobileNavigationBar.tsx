"use client";
import { useState } from "react";
const MobileNavigationBar = () => {
  const [isOpen, setOpened] = useState(false);
  return (
    <nav className="flex justify-between items-center p-4">
      <div> LOGO</div>
      <button onClick={() => setOpened(!isOpen)}>MENU</button>
      {isOpen && (
        <ul className="absolute w-full h-screen top-[-16px] left-[-16px] bg-white p-5">
          <li> About Us</li>
          <li> Services</li>
          <li> Careers</li>
          <li> Contact</li>
          <button
            className="absolute z-10 top-4 right-2"
            onClick={() => {
              setOpened(false);
            }}
          >
            Close
          </button>
        </ul>
      )}
    </nav>
  );
};
export default MobileNavigationBar;
