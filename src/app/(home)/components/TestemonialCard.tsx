import Image from 'next/image';

interface TestimonialCardProps {
    quote: string;
    name: string;
    title: string;
    company: string;
    image: string;
    
}

const TestimonialCard = ({ quote, name, title, company, image } :TestimonialCardProps) => {
  return (
    <div className="p-6 rounded shadow-md shadow-myPurple-600 dark:bg-gray-900">
      <p>{quote}</p>
      <div className="flex items-center mt-4 space-x-4">
        <Image
          src={image}
          alt={name}
          width={50}
          height={50}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-sm dark:text-gray-400">{title}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;