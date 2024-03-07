import OurServicesSection from "./components/OurServicesSection";
import BrandsInfiniteScroll from "./components/ui/BrandsInfiniteScroll";
import HeroSection from "./components/ui/HeroSection";
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
