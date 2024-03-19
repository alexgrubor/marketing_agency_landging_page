"use client";
import HeroSection from "./components/HeroSection";
import OurMission from "./components/OurMission";
import Image from "next/image";
import OurStory from "./components/OurStory";
import OurValues from "./components/OurValues";
import Team from "./components/Team";
import Testemonials from "./components/Testemonials";
import StickyScroll from "./components/StickyScroll";
import BrandsInfiniteScroll from "../(home)/components/BrandsInfiniteScroll";
import useResponsive from "../../../utils/hooks/useResponsive";
const AboutUSPage = () => {
  const deviceType = useResponsive();
  const content = [
    {
      title: "Our Mission",
      description:
        "At XYZ Marketing Agency, our mission is to empower businesses of all sizes to achieve their goals through innovative and effective marketing strategies. We are committed to delivering exceptional results and exceeding client expectations every step of the way.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image src="/images/event1.jpg" alt="xx" width={800} height={600} />
        </div>
      ),
    },
    {
      title: "Our Story",
      description:
        "Founded in 20XX by John Doe and Jane Smith, XYZ Marketing Agency started as a small team with a big dream. Over the years, we have grown into a reputable agency known for our creativity, professionalism, and dedication to client success. Our journey has been filled with challenges and triumphs, but through it all, our passion for marketing has remained unwavering.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image src="/images/event2.jpg" alt="xx" width={800} height={600} />
        </div>
      ),
    },
    {
      title: "Our Values",
      description:
        "At XYZ Marketing Agency, our values are the foundation of everything we do. Integrity, creativity, collaboration, and excellence guide our decisions and interactions, both internally and with our clients. We believe in transparency, honesty, and accountability in all aspects of our work, and we strive to foster a culture of inclusivity and respect.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image src="/images/event3.jpg" alt="xx" width={800} height={600} />
        </div>
      ),
    },
  ];
  return (
    <div>
      <HeroSection />

      {deviceType === "desktop" && (
        <>
          <BrandsInfiniteScroll />
          <StickyScroll content={content} />
        </>
      )}
      {deviceType === "mobile" ||
        (deviceType === "tablet" && (
          <>
            <OurMission />
            <OurStory />
            <OurValues />
          </>
        ))}
      <Team />
      <Testemonials />
    </div>
  );
};
export default AboutUSPage;
