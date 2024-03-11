'use client'
import Marquee from "react-fast-marquee";
import Image from "next/image";
import useResponsive from "@/hooks/useResponsive";
const clients = [
  {
    name: 'John Doe',
    company: 'ABC Corporation',
    review: 'Exceptional leader, always steering the ship with vision and dedication!',
    avatarPath: '/team_icons/team6.svg',
  },
  {
    name: 'Jane Doe',
    company: 'XYZ Tech',
    review: 'Incredible technical expertise, bringing innovative solutions to every challenge.',
    avatarPath: '/team_icons/team2.svg',
  },
  {
    name: 'John Smith',
    company: 'Operations Inc.',
    review: 'A master of efficiency, ensuring smooth operations in every aspect of the business.',
    avatarPath: '/team_icons/team4.svg',
  },
  {
    name: 'Jane Smith',
    company: 'Finance Solutions',
    review: 'Financial genius, managing our resources with precision and strategic foresight.',
    avatarPath: '/team_icons/team3.svg',
  },
  {
    name: 'John Johnson',
    company: 'Marketing Innovations',
    review: 'Marketing maestro, crafting compelling strategies that captivate our audience.',
    avatarPath: '/team_icons/team5.svg',
  },
  {
    name: 'Jane Johnson',
    company: 'Innovation Hub',
    review: "A true innovator, pushing the boundaries of what's possible in our industry.",
    avatarPath: '/team_icons/team1.svg',
  },
];
const Testemonials = () => {
  const deviceType = useResponsive();
  return (
    <div className="bg-secondBg z-[3] p-4">
    <h2 className="text-3xl text-center text-myPurple-600 font-bold my-8">
      Testimonials
    </h2>
    {deviceType !== 'mobile' && <Marquee gradient={false} speed={40}>
      {clients.map((client, index) => (
        <div key={index} className="flex flex-col sm:flex-row border-2 shadow-sm shadow-myPurple-900 border-myPurple-600 m-3 items-center gap-4 p-3">
          <div className="flex-shrink-0">
            <Image src={client.avatarPath} alt={`${client.name}'s Avatar`} width={100} height={100} className="rounded-full" />
          </div>
          <div className="flex flex-col justify-center items-center sm:items-start sm:pl-4">
            <h3 className="text-myPurple-900 text-lg font-semibold">{client.name}</h3>
            <p className="text-black font-bold text-sm">{client.company}</p>
            <p className="text-black text-sm p-5">"{client.review}"</p>
          </div>
        </div>
      ))}
    </Marquee>}
    {
      deviceType === 'mobile' && clients.map((client, index) => (
        <div key={index} className="flex flex-col sm:flex-row border-2 shadow-sm shadow-myPurple-900 border-myPurple-600 m-3 items-center gap-4 p-3">
          <div className="flex-shrink-0">
            <Image src={client.avatarPath} alt={`${client.name}'s Avatar`} width={100} height={100} className="rounded-full" />
          </div>
          <div className="flex flex-col justify-center items-center sm:items-start sm:pl-4">
            <h3 className="text-myPurple-900 text-lg font-semibold">{client.name}</h3>
            <p className="text-black font-bold text-sm">{client.company}</p>
            <p className="text-black text-sm p-5">"{client.review}"</p>
          </div>
        </div>
      ))
    }
  </div>
  )
}
export default Testemonials