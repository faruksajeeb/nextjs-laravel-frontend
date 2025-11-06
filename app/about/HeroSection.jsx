import Link from "next/link";
export default function MissionVision() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
      <div className="space-y-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
          About Travelo
        </h2>

        <p className="mt-2 text-gray-300 max-w-xl text-lg">
          We craft unforgettable trips with local experts, sustainable
          practices, and personalized service. Since our founding, our mission
          has been to make meaningful travel accessible, responsible, and joyful
          for everyone.
        </p>

        <ul className="mt-4 space-y-2 text-sm text-gray-400">
          <li>• Personalized itineraries created by local specialists</li>
          <li>• Flexible booking & 24/7 customer support</li>
          <li>• Responsible travel practices and community partnerships</li>
        </ul>

        <div className="mt-6 flex gap-4">
          <Link
            href="/conatct"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 transition px-6 py-3 rounded-2xl shadow-lg font-semibold text-white"
          >
            Get in touch
          </Link>
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 border border-indigo-500 hover:bg-indigo-600/20 transition px-6 py-3 rounded-2xl text-indigo-400 font-medium"
          >
            See Packages
          </Link>
        </div>
      </div>

      <div className="rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transform transition">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop"
          alt="about travel"
          className="w-full h-96 object-cover"
        />
      </div>
    </section>
  );
}
