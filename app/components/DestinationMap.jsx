// app/components/DestinationMap.jsx
"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function DestinationMap({ lat, lng, title }) {
//   const position = [23.8103, 90.4125]; // Dhaka
  if (!lat || !lng) return null; // Don't render if coordinates are missing
  const position = [lat, lng];

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden mt-6 shadow-md">
      <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='© <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>{title || "Destination"}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
