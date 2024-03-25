import Link from "next/link";

interface MobileHeroSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const MobileHeroSection: React.FC<MobileHeroSectionProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center py-12 bg-gradient-to-b from-myPurple-600 to-black md:py-24 lg:hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter text-myPurple-900 mb-8 ">
              {title}
            </h1>
            <p className="mx-auto max-w-[600px] text-secondBg md:text-xl dark:text-gray-400">
              {description}
            </p>
          </div>
          <div>
            <Link className=" bg-myPurple-600 p-2 px-4 border border-bg transition-all duration-300 hover:bg-bg hover:text-myPurple-600 hover:border-myPurple-600 " href={buttonLink}>{buttonText}</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileHeroSection;
