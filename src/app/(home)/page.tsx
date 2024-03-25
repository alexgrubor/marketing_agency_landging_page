import OurServicesSection from "./components/OurServicesSection";
import BrandsInfiniteScroll from "./components/BrandsInfiniteScroll";
import OurSuccess from "./components/OurSuccess";
import Events from "./components/Events";
import WaveSection from "./components/WaveSection";
import Testimonials from "./components/Testimonials";
import BlogSection from "./components/BlogSection";
import MobileHeroSection from "../components/MobileHeroSection";

export default function Home() {
  return (
    <>
      <main className="">
        <WaveSection />
        <MobileHeroSection
          title="We Make Brands Unforgettable"
          description="Transforming your vision into a captivating story. Let's create something amazing together."
          buttonText="Contact Us"
          buttonLink="/contact-us"
        />
        <BrandsInfiniteScroll />
        <OurServicesSection />
        <OurSuccess />
        <Events />
        <Testimonials />
        <BlogSection />
      </main>
    </>
  );
}
