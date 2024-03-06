import brands from "../../../../public/brands";
import Image from "next/image";
import BigTextInline from "./BigTextInline";
const BrandsInfiniteScroll = () => {
  return (
    <div className="bg-secondBg p-4 flex flex-col justify-center items-center gap-4">
      <h2 className="text-5xl my-6 text-center w-full md:w-[70%]">
        Challengers Trust us to  Drive Their Digital <BigTextInline text="Marketing" textColor="text-myPurple-600" textSize="text-lg"/> Success
      </h2>
      <p className=" text-center w-full md:w-[50%] mb-4">
        We work with everyone from category leaders ready to embrace innovative
        marketing strategies to start-ups on the verge of disrupting entire
        industries. One thing they have in common? They never settle for the
        status quo.
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-8">
  {brands.map((brand, index) => (
    <div
      key={index}
      className="flex justify-center items-center w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-white p-4 border border-myPurple-600 transition-all duration-300 hover:bg-myPurple-600 hover:border-myPurple-600 hover:text-white"
    >
      <Image
        src={brand.image}
        alt={brand.id + "-" + index}
        layout="fit"
      />
    </div>
  ))}
</div>
    </div>
  );
};
export default BrandsInfiniteScroll;
