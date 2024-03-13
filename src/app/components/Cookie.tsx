"use client";
import CookieConsent from "react-cookie-consent";
const Cookie = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      cookieName="MarketingAgencyWebsiteCookie"
      style={{ background: "#010101" }}
      buttonStyle={{ color: "#f1f1f1", fontSize: "16px", backgroundColor: '#8E44AD' }}
      expires={150}
    >
      We use cookies on our website to enhance your browsing experience and
      provide personalized content. By clicking <span className="font-bold text-xl text-myPurple-600">Accept</span> you consent to the use
      of all cookies. However, you may visit <span className="font-bold text-xl text-myPurple-600">Cookie Settings</span> to provide a
      controlled consent.
    </CookieConsent>
  );
};
export default Cookie;
