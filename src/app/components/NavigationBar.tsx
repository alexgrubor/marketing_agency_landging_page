'use client'
import NavLink from "next/link";
import LetsChatButton from "./ui/LetsChatButton";
import { usePathname } from "next/navigation";
import { useUser, SignOutButton, useAuth } from "@clerk/nextjs";


const NavigationBar = () => {
  const { sessionId } = useAuth();
  const pathname = usePathname();
  const user = useUser();
  return (
    <nav
      className="hidden md:flex justify-between sticky top-0 bg-bg items-center p-4 shadow-sm shadow-secondBg text-white text-2xl z-30"
    >
      <div className="flex gap-4">
        <NavLink href="/">LOGO</NavLink>
        {
          user.isSignedIn ? <SignOutButton signOutOptions={{ sessionId: sessionId ?? '' }} /> : ''
        }
        
      </div>
      <ul className="flex gap-6">
      <li>
                    <NavLink
                        className={`transition-all duration-300 ${
                            pathname === "/about-us"
                                ? "text-myPurple-600"
                                : "hover:text-myPurple-600"
                        }`}
                        href="/about-us"
                    >
                        About Us
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={`transition-all duration-300 ${
                            pathname === "/our-services"
                                ? "text-myPurple-600"
                                : "hover:text-myPurple-600"
                        }`}
                        href="/our-services"
                    >
                        Services
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={`transition-all duration-300 ${
                            pathname === "/careers"
                                ? "text-myPurple-600"
                                : "hover:text-myPurple-600"
                        }`}
                        href="/careers"
                    >
                        Careers
                    </NavLink>
                </li>
        <li>
          <LetsChatButton href="/contact-us" text="Let's Chat" />
        </li>
      </ul>
    </nav>
  );
};
export default NavigationBar;
