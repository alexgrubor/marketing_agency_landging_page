import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-bg text-secondBg p-8 border-t-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold mb-2">Agency</h2>
          <ul>
            <li>
              <Link href="/our-services">Our Services</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
            <li>
              <Link href="/policy">Our Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold mb-2">Company</h2>
          <ul>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/careers">Careers</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-2">Resources</h2>
          <ul>
            <li>
              <Link href="/blogs">Blog</Link>
            </li>
            <li>
              <Link href="/newsletter">Newsletter</Link>
            </li>
            <li>
              <Link href="/faqs">FAQs</Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center my-3">
        &copy; {new Date().getFullYear()} Agency. All rights reserved.
      </p>
    </footer>
  );
};
export default Footer;
