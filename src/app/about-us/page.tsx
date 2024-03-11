import Image from "next/image";
import OurMission from "./components/OurMission";
import OurStory from "./components/OurStory";
import OurValues from "./components/OurValues";
import HeroSection from "./components/HeroSection";
import Team from "./components/Team";
import Testemonials from "./components/Testemonials";

const page = () => {
  return (
    <div className=" mx-auto">
      <HeroSection />
      <OurMission />
      <OurStory />
      <OurValues />
      <Team />
      <Testemonials />
    </div>
  );
};
export default page;
