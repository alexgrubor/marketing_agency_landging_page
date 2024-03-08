import brands from "../../../../public/brands";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const BrandsInfiniteScroll = () => {
  return (
    <div className="bg-secondBg z-[3] ">
      {
        <Marquee gradient={false} speed={40}>
          {brands.map((brand, index) => (
            <div key={index} className="mx-4">
              <Image
                src={brand.image}
                alt={brand.id + "brand"}
                width={300}
                height={300}
              />
            </div>
          ))}
        </Marquee>
      }
    </div>
  );
};
export default BrandsInfiniteScroll;
