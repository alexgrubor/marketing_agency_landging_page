import Image from "next/image";
const WhyJoin = () => {
  return (
    <section className="min-h-screen bg-secondBg flex justify-center items-center flex-col gap-2">
      <h2 className="text-3xl  font-bold text-myPurple-600 text-center mb-9">
        Why Join Our Team?
      </h2>
      <div className="flex flex-wrap md:gap-10 justify-center">
        {/* Card 1 */}
        <div className="p-4 rounded-lg gap-4 flex flex-col items-center justify-between">
          <Image
            src="./why_to_join_icons/science-svgrepo-com.svg"
            alt="team1"
            width={100}
            height={100}
          />
          <p className="text-center w-[8rem]">
            Grow your skillset by collaborating with our experienced team on
            projects for top tech brands.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-4 rounded-lg gap-4 flex flex-col items-center justify-between">
          <Image
            src="./why_to_join_icons/growth-idea-light-svgrepo-com.svg"
            alt="team2"
            width={100}
            height={100}
          />
          <p className="text-center w-[8rem]">
            Unleash your talents and cultivate new skills in a team that
            empowers your growth.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-4 rounded-lg gap-4 flex flex-col items-center justify-between">
          <Image
            src="./why_to_join_icons/users-svgrepo-com.svg"
            alt="team3"
            width={100}
            height={100}
          />
          <p
            className="text-center w-[8rem]"
          >
            Enjoy a positive work experience with clients who value teamwork!
          </p>
        </div>

        {/* Card 4 */}
        <div className="p-4 rounded-lg gap-4 flex flex-col items-center justify-between">
          <Image
            src="./why_to_join_icons/remote-work-male-svgrepo-com.svg"
            alt="team4"
            width={100}
            height={100}
          />
          <p
            className="text-center w-[8rem]"
          >
            Remote first. You can work from pretty much anywhere with a flexible
            schedule.
          </p>
        </div>

        {/* Card 5 */}
        <div className="p-4 rounded-lg gap-4 flex flex-col items-center justify-between">
          <Image
            src="./why_to_join_icons/communication-account-verified-checked-person-profile-user-icon-svgrepo-com.svg"
            alt="team5"
            width={100}
            height={100}
          />
          <p className="
          text-center w-[8rem]
          ">
            No nonsense. Just open, honest, and kind communication with our team
            & our clients.
          </p>
        </div>

        {/* Card 6 */}
        <div className="p-4 rounded-lg gap-4 flex flex-col items-center justify-between">
          <Image
            src="./why_to_join_icons/balance-law-loss-svgrepo-com.svg"
            alt="team6"
            width={100}
            height={100}
          />
          <p className="
          text-center w-[8rem]
          ">
            We prioritize healthy
            boundaries to prevent burnout and empower you to focus on your
            passions.
          </p>
        </div>
      </div>
    </section>
  );
};
export default WhyJoin;
