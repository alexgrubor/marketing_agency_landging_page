import TeamCard from '../components/TeamCard';

const teamMembers = [
  {
    name: 'John Doe',
    position: 'CEO',
    description: 'The mastermind behind it all!',
    avatarPath: '/team_icons/team6.svg'
  }, 
  {
    name: 'Jane Doe',
    position: 'CTO',
    description: 'The tech genius!',
    avatarPath: '/team_icons/team2.svg'
  }, 
  {
    name: 'John Smith',
    position: 'COO',
    description: 'The operations guru!',
    avatarPath: '/team_icons/team4.svg'
  }, 
  {
    name: 'Jane Smith',
    position: 'CFO',
    description: 'The finance wizard!',
    avatarPath: '/team_icons/team3.svg'
  }, 
  {
    name: 'John Johnson',
    position: 'CMO',
    description: 'The marketing maestro!',
    avatarPath: '/team_icons/team5.svg'
  }, 
  {
    name: 'Jane Johnson',
    position: 'CIO',
    description: 'The innovation expert!',
    avatarPath: '/team_icons/team1.svg'
  }
]

const Team = () => {
  return (
    <div className='flex flex-col items-center gap-4 md:gap-6 min-h-screen'>
    <h1 className='text-3xl text-center text-myPurple-600 font-bold mt-8'>
      Meet the team
    </h1>
    <p className='text-secondBg text-center md:max-w-[40%]'>
      Our team is made up of the best and brightest minds in the industry. Each member brings their own unique skills and experiences to the table, making us a dynamic and collaborative team.
    </p>
    <div className="flex justify-center items-center  text-secondBg">
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </div>
    </div>
  )
}
export default Team