import BigTextInline from "@/app/components/ui/BigTextInline";
import Image from "next/image";
const OurStory = () => {
  return (
    <main className="bg-bg text-secondBg flex flex-col min-h-screen justify-center items-center gap-8">
      <div className="flex flex-col md:flex-row justify-center">
      <div>
          <Image src="/images/event1.jpg" alt="xx" width={800} height={600} />
        </div>
        <div className="w-full md:w-1/3 p-4">
          <BigTextInline text="Our Story" textColor="text-myPurple-600" />
          <ul>
            <li>
              <strong>Founding Roots</strong>
              <p>
                Established in [Year], [Your Company Name] was founded by a
                group of digital enthusiasts with a common vision: to redefine
                the way businesses connect and thrive in the digital age.
              </p>
            </li>
            <li>
              <strong>Early Steps</strong>
              <p>
                Our journey began with small yet impactful steps. Committed to
                understanding the evolving digital landscape.
              </p>
            </li>
            <li>
              <strong>Team Collaboration</strong>
              <p>
                Driven by a passion for digital innovation, our team of experts
                came together, bringing diverse skills and experiences to create
                a dynamic and collaborative environment at [Your Company Name].
              </p>
            </li>
            <li>
              <strong>Milestones and Growth</strong>
              <p>
                Celebrated significant milestones and achievements. Launched
                successful campaigns and formed lasting client partnerships.
              </p>
            </li>
            <li>
              <strong>Our Philosophy</strong>
              <p>
                Believe in the power of innovation, client-centric strategies,
                integrity, and adaptability. These principles shape every
                project we undertake, setting us apart in the digital marketing
                landscape.
              </p>
            </li>
          </ul>

          <h2>Looking Ahead</h2>
          <p>
            As we look to the future, [Your Company Name] remains committed to
            guiding businesses toward digital success. Join us on this journey
            as we continue to evolve, adapt, and empower businesses in the
            ever-changing digital world.
          </p>
        </div>
       
      </div>
    </main>
  );
};
export default OurStory;
