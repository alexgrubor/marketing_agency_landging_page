import Image from "next/image";
const Testimonials = () => {
  return (
    <section className="bg-secondBg">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid items-center gap-4 xl:grid-cols-5">
          <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
            <h2 className="text-4xl font-bold text-myPurple-600">
              What Our Customers Say
            </h2>
            <p className="dark:text-gray-400">
              See why businesses and individuals trust our solutions.
            </p>
          </div>
          <div className="p-6 xl:col-span-3">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid content-center gap-4">
                <div className="p-6 rounded shadow-md dark:bg-gray-900">
                  <p>
                    Working with ABC Marketing Agency has been a game-changer
                    for our company. Their innovative strategies and attention
                    to detail have significantly boosted our online presence and
                    customer engagement. The team at ABC Marketing is not only
                    highly skilled but also incredibly responsive and dedicated.
                    I highly recommend their services to any business looking to
                    take their marketing efforts to the next level
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <Image
                      src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress"
                      alt="client1"
                      width={50}
                      height={50}
                      layout="fit"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="text-lg font-semibold">Sarah Johnson</p>
                      <p className="text-sm dark:text-gray-400">
                        CEO, Techify Inc.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded shadow-md dark:bg-gray-900">
                  <p>
                    ABC Marketing Agency exceeded our expectations in every
                    aspect. From the initial consultation to the execution of
                    our marketing campaigns, they demonstrated professionalism
                    and expertise. Their ability to understand our brand and
                    target audience resulted in tangible results, including
                    increased website traffic and higher conversion rates. I'm
                    extremely satisfied with the results and look forward to
                    continuing our partnership
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <Image
                      src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600"
                      width={50}
                      height={50}
                      alt="client3"
                      layout="fit"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="text-lg font-semibold">Michael Smith</p>
                      <p className="text-sm dark:text-gray-400">
                        Marketing Manager, FreshBites
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid content-center gap-4">
                <div className="p-6 rounded shadow-md dark:bg-gray-900">
                  <p>
                    As a small business owner, finding the right marketing
                    partner was crucial for our growth. ABC Marketing Agency
                    came highly recommended, and they did not disappoint. Their
                    team took the time to understand our unique needs and
                    crafted customized strategies that aligned perfectly with
                    our goals. Their creativity and attention to detail set them
                    apart, and we've seen a significant improvement in brand
                    awareness and customer engagement since partnering with
                    them.
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <Image
                      src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt=""
                      width={50}
                      height={50}
                      layout="fit"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="text-lg font-semibold">Emily Carter</p>
                      <p className="text-sm dark:text-gray-400">
                        Founder, Bloom Beauty
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded shadow-md dark:bg-gray-900">
                  <p>
                    ABC Marketing Agency has been instrumental in helping us
                    navigate the complexities of digital marketing. Their
                    expertise in SEO, PPC, and social media marketing has
                    significantly improved our online visibility and generated
                    quality leads for our business. What sets ABC Marketing
                    apart is their commitment to delivering results and their
                    proactive approach to optimizing campaigns for maximum ROI.
                    I highly recommend their services to any business looking to
                    stay ahead in today's competitive landscape.
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <Image
                      src="https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="client2"
                      width={500}
                      height={500}
                      className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                    />
                    <div>
                      <p className="text-lg font-semibold">David Thompson</p>
                      <p className="text-sm dark:text-gray-400">
                        COO, GreenTech Solutions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
