import Numbers from "./Numbers";

const OurSuccess = () => {
  return (
    <div className="bg-secondBg p-5 md:min-h-[20rem] flex justify-center w-full">
      <div className="p-4 max-w-md md:max-w-xl lg:max-w-2xl text-center md:text-left">
        <p className="text-5xl my-2 font-bold">Our clients achieve</p>
        <div className="flex flex-col md:flex-row items-center">
          <Numbers targetNumber={70} />
          <p className="text-5xl ml-5 font-bold inline">
            increase in website traffic.
          </p>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          *Based on a 6-month average.
        </p>
      </div>
    </div>
  );
};
export default OurSuccess;
