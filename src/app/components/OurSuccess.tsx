import Numbers from "./Numbers";

const OurSuccess = () => {
  return (
    <div className="bg-secondBg p-5 md:min-h-[20rem] flex justify-center w-[100vw]">
      <div className=" p-4 ">
        <p className="text-5xl text-left my-2 font-bold">Our clients achieve</p>
        <Numbers targetNumber={70} />
        <p className="text-5xl ml-5 font-bold inline">
          increase in website traffic.
        </p>
        <p className="text-sm text-gray-500 mt-4">
          *Based on a 6-month average.
        </p>
      </div>
    </div>
  );
};
export default OurSuccess;
