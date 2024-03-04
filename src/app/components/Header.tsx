"use client";
import MobileNavigationBar from "./MobileNavigationBar";
import NavigationBar from "./NavigationBar";
import useResponsive from "@/hooks/useResponsive";

const Header = () => {
  const deviceType = useResponsive();
  return (
    <>
      {deviceType === "desktop" ? <NavigationBar /> : <MobileNavigationBar />}
    </>
  );
};
export default Header;
