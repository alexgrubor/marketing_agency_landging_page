import OurServicesSection from "./components/OurServicesSection";
import BrandsInfiniteScroll from "./components/BrandsInfiniteScroll";
import HeroSection from "./components/HeroSection";
import OurSuccess from "./components/OurSuccess";

export default function Home() {

  return (
    <>
      <main className="">
        <HeroSection />
        <BrandsInfiniteScroll />
        <OurServicesSection />
        <OurSuccess />
     
    
      </main>
    </>
  );
}
