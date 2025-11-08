
export default function Partners() {
  const partners = ["Airline Co", "StayFinder", "LocalGuides", "EcoTrust"];

  return (
    <section className="mb-12">
      <h3 className="text-3xl font-extrabold mb-8 text-center bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
        Partners
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {partners.map((partner) => (
          <div
            key={partner}
            className="flex items-center justify-center p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 text-white font-semibold hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            {partner}
          </div>
        ))}
      </div>
    </section>
  );
}
