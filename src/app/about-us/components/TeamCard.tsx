import Image from 'next/image';

interface TeamCardProps {
  name: string;
  position: string;
  description: string;
  avatarPath: string;
}

const TeamCard= ({ name, position, description, avatarPath } :TeamCardProps) => {
  return (
    <div className="bg-secondBg flex flex-col justify-center items-center p-4 rounded-lg shadow-lg">
      <Image src={avatarPath} alt={`${name}'s Avatar`} width={100} height={100} className="rounded-full" />
      <h3 className="text-myPurple-900 text-lg font-semibold mt-4">{name}</h3>
      <p className="text-black text-sm">{position}</p>
      <p className="text-black text-sm mt-2">{description}</p>
    </div>
  );
};

export default TeamCard;