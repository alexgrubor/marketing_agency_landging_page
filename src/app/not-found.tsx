import Image from "next/image";
const NotFoundPage = () => {
  return (
    <div className=" h-screen flex flex-col items-center text-secondBg justify-center">
      <h1 className="flex justify-center items-center text-[10rem]">
        4
        <span>
          <Image src='./ghost-svgrepo-com.svg' alt="ghost" width={200} height={250} className="animate-ping animate-infinite animate-duration-[5000ms] animate-ease-in-out " />
        </span>
        4
      </h1>
      <h2 className="text-3xl ">Error: 404 page not found</h2>
      <p>Sorry, the page you're looking for cannot be accessed</p>
    </div>
  );
};

export default NotFoundPage;
