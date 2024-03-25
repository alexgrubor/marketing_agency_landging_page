import Image from "next/image";
import TestimonialCard from "./TestemonialCard";

const testimonialsData = [
  {
    quote: `Working with Our Marketing Agency has been a game-changer
    for our company. Their innovative strategies and attention
    to detail have significantly boosted our online presence and
    customer engagement. The team at Our Marketing is not only
    highly skilled but also incredibly responsive and dedicated.
    I highly recommend their services to any business looking to
    take their marketing efforts to the next level`,
    name: "Sarah Johnson",
    title: "CEO", 
    company: "Techify Inc.",
    image: "/team_icons/team1.svg"
  },
  {
    quote: `Our Marketing Agency exceeded our expectations in every
    aspect. From the initial consultation to the execution of
    our marketing campaigns, they demonstrated professionalism
    and expertise. Their ability to understand our brand and
    target audience resulted in tangible results, including
    increased website traffic and higher conversion rates. I'm
    extremely satisfied with the results and look forward to
    continuing our partnership`,
    name: "Michael Smith",
    title: "Marketing Manager",
    company: "FreshBites",
    image: "/team_icons/team4.svg"
  },
  {
    quote:`  As a small business owner, finding the right marketing
    partner was crucial for our growth. Our Marketing Agency
    came highly recommended, and they did not disappoint. Their
    team took the time to understand our unique needs and
    crafted customized strategies that aligned perfectly with
    our goals. Their creativity and attention to detail set them
    apart, and we've seen a significant improvement in brand
    awareness and customer engagement since partnering with
    them.`,
    name: "Emily Carter",
    title: "Founder",
    company: "Bloom Beauty",
    image: "/team_icons/team2.svg"
  },
  {
    quote: `  Our Marketing Agency has been instrumental in helping us
    navigate the complexities of digital marketing. Their
    expertise in SEO, PPC, and social media marketing has
    significantly improved our online visibility and generated
    quality leads for our business. What sets Our Marketing
    apart is their commitment to delivering results and their
    proactive approach to optimizing campaigns for maximum ROI.
    I highly recommend their services to any business looking to
    stay ahead in today's competitive landscape.`,
    name: "David Thompson",
    title: "COO",
    company: "GreenTech Solutions",
    image: "/team_icons/team3.svg"
  },
]

const Testimonials = () => {
  return (
    <section className="bg-secondBg">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid items-center p-4 px-4 lg:px-10 gap-4 xl:grid-cols-5">
          <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
            <h2 className="text-4xl font-bold text-myPurple-600">
              What Our Customers Say
            </h2>
            <p className="dark:text-gray-400">
              See why businesses and individuals trust our solutions.
            </p>
            <p className="">
              At Our Agency, we pride ourselves on delivering top-notch
              marketing solutions tailored to meet your unique needs. Whether
              you're a small startup or a large corporation, we're dedicated to
              helping you achieve your goals and maximize your ROI.
            </p>
            <p className="">
              With a team of experienced professionals and a proven track record
              of success, we're committed to driving growth for your business
              through innovative strategies and impactful campaigns. Partner
              with us today and experience the difference firsthand.
            </p>
          </div>
          <div className="p-2 xl:col-span-3">
            <div className="grid gap-4 md:grid-cols-2">
            <div className="grid content-center gap-4"> 
      
                {testimonialsData.slice(0, 2).map((testimonial, index) => (
                  <TestimonialCard key={index} {...testimonial} />
                ))}
              </div>
              <div className="grid content-center gap-4">
               
                {testimonialsData.slice(2).map((testimonial, index) => (
                  <TestimonialCard key={index} {...testimonial} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
