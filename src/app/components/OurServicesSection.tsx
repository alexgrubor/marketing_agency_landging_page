import Link from "next/link";

const gridItems = [
    'Positioning & Messaging',
    'Go-To-Market Strategy',
    'Product Launches',
    'Sales Decks & Enablement Assets',
    'Competitive Intelligence',
    'Website Content & Design',
  ];
const OurServicesSection = () => {
  return (
    <section className="text-secondBg  flex flex-col justify-center gap-6 items-center p-4">
       <h2 className=" text-3xl font-bold my-4 text-center">
       We’re experts in product marketing, sales enablement, and design
       </h2>

       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
        {gridItems.map((item, index) => (
          <div
            key={index}
            className="bg-secondBg text-bg p-6 shadow-md shadow-myPurple-800 flex justify-center text-2xl"
          >
            {item}
          </div>
        ))}
      </div>
      <Link href='/our-services' className="my-5 p-3 px-5 bg-secondBg  block font-bold text-2xl text-myPurple-800 hover:bg-myPurple-900 hover:text-secondBg transition-all ease-in-out"> 
      Our services
      </Link>
    </section>
  )
}
export default OurServicesSection