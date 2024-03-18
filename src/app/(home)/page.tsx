import OurServicesSection from "./components/OurServicesSection";
import BrandsInfiniteScroll from "./components/BrandsInfiniteScroll";
import OurSuccess from "./components/OurSuccess";
import Events from "./components/Events";
import WaveSection from "./components/WaveSection";

export default function Home() {

  return (
    <>
      <main className="">
        <WaveSection />
        <BrandsInfiniteScroll />
        <OurServicesSection />
        <OurSuccess />
        <Events/>
      </main>
    </>
  );
}
