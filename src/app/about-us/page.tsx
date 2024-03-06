import Image from "next/image";

const page = () => {
  return (
    <div className=" mx-auto">
      <section className="p-4 py-6 min-h-screen text-secondBg mx-auto">
        
        <div>
          <Image src={"./vibrons-svgrepo-com.svg"} alt="hero" width={920} height={880} />
          </div>
          <div>
          <h2 className="text-left text-6xl font-bold mb-4">
          Challenging Convention, Accelerating Growth
        </h2>
        <p className="text-left text-2xl">
          WE ONLY BELIEVE IN DOING ONE KIND OF MARKETING: THE KIND THAT
          TRANSFORMS YOUR BUSINESS.
        </p>
          </div>
          
       
      </section>

      <section className="mb-8 bg-secondBg min-h-screen p-4">
        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-600">
          Founded in <span className="text-blue-500 font-semibold">[Year]</span>
          ,
          <span className="text-blue-500 font-semibold">
            [Your Agency Name]
          </span>
          has been on a mission to help businesses thrive...
        </p>
      </section>

      <section className="mb-8 min-h-screen">
        <h2 className="text-3xl font-bold mb-4">Our Team</h2>
        <p className="text-gray-600">
          Meet the talented individuals behind [Your Agency Name]. Our diverse
          team brings together expertise in marketing strategy, design,
          development, and more. Together, we work collaboratively to deliver
          outstanding results for our clients.
        </p>
      </section>

      <section className="mb-8 bg-secondBg min-h-screen p-4">
        <h2 className="text-3xl font-bold mb-4">Mission and Values</h2>
        <p className="text-gray-600">
          At [Your Agency Name], our mission is to [Your Mission Statement]. We
          uphold values of creativity, transparency, and client success. These
          principles guide our every action and decision, ensuring that we
          consistently exceed expectations.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
        <p className="text-gray-600">
          Don't just take our word for it. Read what our clients have to say
          about their experiences working with [Your Agency Name]. Our success
          is measured by the success of our clients.
        </p>
      </section>

      <section className="mb-8 min-h-screen p-4">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600">
          Ready to take your marketing to the next level? Contact us today to
          discuss how [Your Agency Name] can help your business thrive. We look
          forward to hearing from you!
        </p>
      </section>
      <section className=" min-h-screen p-4 bg-secondBg">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600">
          Ready to take your marketing to the next level? Contact us today to
          discuss how [Your Agency Name] can help your business thrive. We look
          forward to hearing from you!
        </p>
      </section>
    </div>
  );
};
export default page;
