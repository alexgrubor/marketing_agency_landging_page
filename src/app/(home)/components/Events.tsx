import BigTextInline from "@/app/components/ui/BigTextInline";
import EventCard from "./EventCard";

const Events = () => {
  return (
    <section className="md:min-h-screen text-secondBg flex flex-col justify-center items-center gap-4 p-4 my-6">
      <BigTextInline text="Our Events" textColor="text-myPurple-600" />
      <p className="mb-4 text-center">
        We are always hosting events to help our community. Check out what we're
        up to!
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <EventCard
          title=" Startup Pitch Night"
          imageSrc="/images/event1.jpg"
          description="Elevate your evening at our Startup Pitch Night, where cutting-edge startups compete for funding and recognition, showcasing the future of innovation in the company of venture capitalists, industry experts, and fellow enthusiasts."
          industry="B2B"
        />
        <EventCard
          title=" Cultural Arts Festival"
          imageSrc="/images/event2.jpg"
          description="Experience a world of vibrant cultures at our Cultural Arts Festival, where dance, music, and art installations weave together to celebrate diversity and foster unity in an enchanting, family-friendly environment."
          industry="B2C"
        />
        <EventCard
          title="Community Wellness Fair"
          imageSrc="/images/event3.jpg"
          description="Join our Community Wellness Fair for a day of holistic health exploration, including fitness demos, nutrition workshops, and connections with local health professionals, promoting a healthier lifestyle for all."
          industry="B2B"
        />
        <EventCard
          title="AI Blockchain"
          imageSrc="/images/event4.jpg"
          description="Immerse yourself in the latest tech trends at our two-day conference featuring AI, blockchain, and cybersecurity discussions, hands-on workshops, and unparalleled networking opportunities."
          industry="Experimental marketing"
        />
      </div>
    </section>
  );
};
export default Events;
