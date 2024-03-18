import OurServicesSection from "./components/OurServicesSection";
import BrandsInfiniteScroll from "./components/BrandsInfiniteScroll";
import OurSuccess from "./components/OurSuccess";
import Events from "./components/Events";
import WaveSection from "./components/WaveSection";
import Testimonials from "./components/Testimonials";

export default function Home() {

  return (
    <>
      <main className="">
        <WaveSection />
        <BrandsInfiniteScroll />
        <OurServicesSection />
        <OurSuccess />
        <Events/>
        <Testimonials/>
      </main>
    </>
  );
}
