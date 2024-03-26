import Head from "next/head";
import OurServicesSection from "./components/OurServicesSection";
import BrandsInfiniteScroll from "./components/BrandsInfiniteScroll";
import OurSuccess from "./components/OurSuccess";
import Events from "./components/Events";
import WaveSection from "./components/WaveSection";
import Testimonials from "./components/Testimonials";
import BlogSection from "./components/BlogSection";
import MobileHeroSection from "../components/MobileHeroSection";
import Feature from "./components/Feature";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Agency</title>
        <meta name="description" content="Agency Home Page" />
        <link rel="icon" href="/favicon.ico" />
        
        </Head>
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
        <Feature />
        <Events />
        <Testimonials />
        <BlogSection />
      </main>
    </>
  );
}
