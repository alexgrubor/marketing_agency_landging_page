
import HeroSection from "./components/HeroSection";
import JobOpenings from "./components/JobOpenings";
import NoOpenings from "./components/NoOpenings";
import WhyJoin from "./components/WhyJoin";
const page = () => {
  return (
    <>
      <HeroSection />
      <WhyJoin />
      <JobOpenings/>
      <NoOpenings />
    </>
  );
};
export default page;
