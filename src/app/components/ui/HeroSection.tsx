import BigTextInline from "./BigTextInline";
import LetsChatButton from "./LetsChatButton";
const HeroSection = () => {
  return (
    <section className="bg-bg text-secondBg h-screen flex  items-center justify-center relative">
     

      <div className="text-container text-center mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4">
          Boost <BigTextInline text='Your Brand' textColor="text-myPurple-600"/> with XYZ Marketing
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-8">
          Strategic Marketing Solutions Tailored for Your Success
        </p>
        <LetsChatButton href="/contact-us" text="Let's chat" className="p-3 px-4 text-3xl cursor-pointer"/>
      </div>
    </section>
  );
};
export default HeroSection;
