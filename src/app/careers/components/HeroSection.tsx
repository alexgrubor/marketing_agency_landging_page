import Image from "next/image"
const HeroSection = () => {
  return (
    <section className="min-h-screen text-secondBg bg-bg p-4 flex flex-col md:flex-row justify-center items-center">
      <div className="mb-4 lg:mr-4 lg:mb-0 w-full md:w-[45%] p-4">
        <h1 className="text-center lg:text-left text-4xl lg:text-5xl font-bold mb-4 text-myPurple-600">
          Careers at Our Agency
        </h1>
        <p className="text-center lg:text-left text-lg">
          JOIN THE OUR TEAM! Great marketing can only happen in an inclusive
          workplace built on trust, innovation, and a strong work-life balance.
          We're looking for people who are collaborative, creative, and ready to
          take risks and do amazing work.
        </p>
      </div>
      <div className="mb-4 lg:mr-4 lg:mb-0  relative">
        <Image
          src="https://images.pexels.com/photos/7550537/pexels-photo-7550537.jpeg?auto=compress"
          alt="Careers"
          width={600}
          height={400}
          className="md:rotate-6 shadow-lg shadow-myPurple-800"
        />
        <Image
          src="https://images.pexels.com/photos/8145335/pexels-photo-8145335.jpeg?auto=compress"
          alt="Careers"
          width={400}
          height={300}
          className="absolute hidden md:block bottom-[-7rem] left-[6rem] rotate-[-6deg] border-2 border-myPurple-800 shadow-md shadow-myPurple-900"
        />
      </div>
    </section>
  )
}
export default HeroSection