"use client";
import HeroSection from "./components/HeroSection";
import BrandsInfiniteScroll from "../(home)/components/BrandsInfiniteScroll";
import Testimonials from "../(home)/components/Testimonials";
import CallInquiryForm from "./components/CallInquiryForm";
import CTASection from "./components/CTASection";
import MobileHeroSection from "./components/MobileHeroSection";
import MobileServicesSection from "./components/MobileServicesSection";
export interface Product {
  title: string;
  link: string;
  thumbnail: string;
}
const OurServicePage = () => {

  const products = [
    {
      title: "Web design",
      link: "/product-1",
      thumbnail:
        "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "SEO",
      link: "/product-2",
      thumbnail:
        "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Marketing Analytics",
      link: "/product-3",
      thumbnail:
        "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Branding",
      link: "/product-1",
      thumbnail:
        "https://images.pexels.com/photos/7661627/pexels-photo-7661627.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Add campaigns ",
      link: "/product-2",
      thumbnail:
        "https://images.pexels.com/photos/6476805/pexels-photo-6476805.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Content creation",
      link: "/product-3",
      thumbnail:
        "https://images.pexels.com/photos/6237961/pexels-photo-6237961.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Email Marketing",
      link: "/product-1",
      thumbnail:
        "https://images.pexels.com/photos/4112363/pexels-photo-4112363.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Web Development",
      link: "/product-2",
      thumbnail:
        "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Event planning",
      link: "/product-3",
      thumbnail: "/images/event3.jpg",
    },
    {
      title: "Market Research",
      link: "/product-1",
      thumbnail:
        "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Product Design",
      link: "/product-2",
      thumbnail:
        "https://images.pexels.com/photos/5217912/pexels-photo-5217912.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Web design",
      link: "/product-1",
      thumbnail:
        "https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Book launching campaigns",
      link: "/product-1",
      thumbnail:
        "https://images.pexels.com/photos/1742370/pexels-photo-1742370.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Social Media Marketing",
      link: "/product-2",
      thumbnail:
        "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "User Experience Research",
      link: "/product-3",
      thumbnail:
        "https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ] as Array<Product>;
  return (
    <div>
      <section className="hidden md:block">
        <HeroSection products={products} />
        <BrandsInfiniteScroll />
      </section>

      <section className="md:hidden">
        <MobileHeroSection />
        <MobileServicesSection
          products={products.slice(0, 6)}
          title="Our Services"
        />
        <MobileServicesSection
          products={products.slice(6, 10)}
          bgColor="bg-bg"
        />
      </section>

      <Testimonials />
      <CallInquiryForm />
      <CTASection />
    </div>
  );
};
export default OurServicePage;
