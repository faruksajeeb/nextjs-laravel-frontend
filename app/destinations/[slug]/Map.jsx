"use client";
import dynamic from "next/dynamic";

const DestinationMap = dynamic(() => import("@/app/components/DestinationMap"), {
  ssr: false, // only load in browser
});
export default function Map({dest}) {
  return (
    <section className="bg-white/4 p-6 rounded-2xl shadow-md text-gray-300">
      <h3 className="font-semibold">Map</h3>
      <DestinationMap lat={dest.lat} lng={dest.lng} title={dest.name} />
    </section>
  );
}
