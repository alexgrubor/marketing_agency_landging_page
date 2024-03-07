"use client";
import { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "300px",
  height: "300px",
  borderRadius: '4px'
};

const center = {
  lat: 52.52437,
  lng: 13.41053,
};
const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
  });
 
  const [map, setMap] = useState<google.maps.Map | null>(null); 


  const onLoad = useCallback(function callback(map: google.maps.Map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);
  const onUnmount = useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);
  return isLoaded ? (
    <div className="flex flex-col md:flex-row custom-bg text-secondBg  w-[100vw] justify-around p-4 items-center gap-8">
        <div className="text-2xl md:pl-[6rem]">
            <h2 className="text-myPurple-600 my-2">Our Address</h2>
            <p>1234, Street Name</p>
            <p>Berlin</p>
            <p>Berlin, Germany</p>

        </div>
<GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
        <Marker position={center} />
    </GoogleMap>
    </div>
    
  ) : (
    <>
      <h2>Loading....</h2>
    </>
  );
};
export default Map;
