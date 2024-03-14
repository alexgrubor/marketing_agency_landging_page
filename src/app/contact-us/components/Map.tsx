"use client";

import { GoogleMapsEmbed } from "@next/third-parties/google";

const Map = () => {
  return (
    <div className="flex flex-col md:flex-row custom-bg text-secondBg  w-[100vw] justify-around p-4 items-center gap-8">
      <div className="text-2xl md:pl-[6rem]">
        <h2 className="text-myPurple-600 my-2">Our Address</h2>
        <p>1234, Street Name</p>
        <p>Berlin</p>
        <p>Berlin, Germany</p>
      </div>
      <GoogleMapsEmbed
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""}
      height={200}
      width="100%"
      mode="place"
      q="Berlin"
    />
    </div>
  );
};
export default Map;
