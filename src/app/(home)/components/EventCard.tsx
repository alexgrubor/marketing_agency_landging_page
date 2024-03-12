import Image from "next/image";

interface EventCardProps {
  title: string;
  imageSrc: string;
  description: string;
  industry: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  imageSrc,
  description,
  industry,
}) => {
  return (
    <div className="bg-myPurple-600 p-4 max-w-[40rem] shadow-md shadow-secondBg rotate-2 hover:rotate-0 transition duration-300">
      <div className="flex justify-between text-sm text-bg">
        <h3 className="text-secondBg text-3xl my-2">{title}</h3>
        <p># {industry}</p>
      </div>
      <div className="overflow-hidden">
        <Image
          src={imageSrc}
          alt={`event ${title}`}
          width={600}
          height={400}
          className="hover:scale-125 transition-all duration-500 cursor-pointer"
        />
      </div>

      <p className="text-secondBg  my-2 md:my-3 ">{description}</p>
    </div>
  );
};

export default EventCard;
