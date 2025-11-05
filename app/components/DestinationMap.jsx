// components/DestinationMap.jsx
export default function DestinationMap({ location }) {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(location)}&output=embed`;

  return (
    <div className="w-full h-80 rounded-lg overflow-hidden shadow-md mt-6">
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
