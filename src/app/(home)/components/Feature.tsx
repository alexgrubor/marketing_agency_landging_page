import Image from "next/image";
const Feature = () => {
    return (
        <div className="bg-secondBg text-bg flex flex-col md:flex-row justify-center items-center gap-4 lg:gap-x-[5rem] h-[40rem] p-4">
            <div className="relative flex justify-center ">
                <Image
                    alt="mobile-screen"
                    src="/images/Screen.png"
                    className=" "
                    width={300}
                    height={450}
                />
               
            </div>
            <div className="flex flex-col justify-center md:justify-start">
                <h2 className="text-myPurple-700 text-3xl font-bold ">Transform Your Digital Presence</h2>
                <p className="mb-5 mt-2">
                    We craft compelling marketing strategies that drive results.
                </p>
                <button className="bg-myPurple-600 text-white block lg:w-1/2 px-5 py-3">
                    Learn More
                </button>
            </div>
        </div>
    );
};
export default Feature;
