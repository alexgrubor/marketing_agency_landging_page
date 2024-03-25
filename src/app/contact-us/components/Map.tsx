"use client";

import { GoogleMapsEmbed } from "@next/third-parties/google";

const Map = () => {
  return (
    <div className="w-full">
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
