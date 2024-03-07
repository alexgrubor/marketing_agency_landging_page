import OurServicesSection from "./components/OurServicesSection";
import BrandsInfiniteScroll from "./components/ui/BrandsInfiniteScroll";
import HeroSection from "./components/ui/HeroSection";
import ParallaxText from "./components/ParallaxText";

export default function Home() {
  return (
    <>
      <main className="">
        <HeroSection/>
        <BrandsInfiniteScroll/>
        <OurServicesSection/>
     
      </main>
    </>
  );
}
