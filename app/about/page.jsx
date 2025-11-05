import ReadyToPlan from "../components/ReadyToPlan";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 text-white bg-black">
      {/* HERO */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
        <div className="space-y-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
            About Travelo
          </h2>

          <p className="mt-2 text-gray-300 max-w-xl text-lg">
            We craft unforgettable trips with local experts, sustainable
            practices, and personalized service. Since our founding, our mission
            has been to make meaningful travel accessible, responsible, and
            joyful for everyone.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>• Personalized itineraries created by local specialists</li>
            <li>• Flexible booking & 24/7 customer support</li>
            <li>• Responsible travel practices and community partnerships</li>
          </ul>

          <div className="mt-6 flex gap-4">
            <a className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 transition px-6 py-3 rounded-2xl shadow-lg font-semibold text-white">
              Get in touch
            </a>
            <a className="inline-flex items-center gap-2 border border-indigo-500 hover:bg-indigo-600/20 transition px-6 py-3 rounded-2xl text-indigo-400 font-medium">
              See Packages
            </a>
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

      {/* MISSION / VISION / VALUES */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          {
            title: "Our Mission",
            desc: "To create transformative travel experiences while supporting local communities and protecting the environment.",
            color: "from-indigo-500 to-purple-500",
          },
          {
            title: "Our Vision",
            desc: "A world where travel connects people responsibly and creates lasting positive impact.",
            color: "from-pink-500 to-red-500",
          },
          {
            title: "Our Values",
            desc: "Integrity, Sustainability, Local First, Excellence.",
            color: "from-green-400 to-teal-400",
          },
        ].map((item) => (
          <div
            key={item.title}
            className={`p-6 rounded-2xl shadow-lg bg-gradient-to-br ${item.color} text-white hover:scale-105 transition-transform`}
          >
            <h4 className="font-semibold text-lg">{item.title}</h4>
            <p className="mt-2 text-sm text-white/90">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* TIMELINE */}
      <section className="mb-12">
        <h3 className="text-3xl font-extrabold mb-8 text-center bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
          Our Story
        </h3>

        <ol className="relative border-l-2 border-indigo-300 ml-6 space-y-8">
          {[
            {
              year: "2016",
              title: "Founded in Dhaka",
              desc: "Small team of travel enthusiasts started designing local tours.",
            },
            {
              year: "2018",
              title: "International Partnerships",
              desc: "Expanded partnerships with guides across Asia.",
            },
            {
              year: "2021",
              title: "Sustainable Travel Program",
              desc: "Launched community and carbon-offset initiatives.",
            },
            {
              year: "2024",
              title: "100k Travelers",
              desc: "Served over 100,000 happy travelers worldwide.",
            },
            {
              year: "2025",
              title: "150k Travelers",
              desc: "Served over 150,000 happy travelers worldwide.",
            },
          ].map((item, idx) => (
            <li key={idx} className="relative">
              {/* Circle marker */}
              <span className="absolute -left-10 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400 text-white font-bold shadow-lg text-sm">
                {item.year}
              </span>

              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ml-12">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-white text-lg">
                    {item.title}
                  </h4>
                  <span className="text-sm text-indigo-200 font-medium">
                    {item.year}
                  </span>
                </div>
                <p className="text-gray-200">{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* TEAM */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold mb-6 text-indigo-400">
            Meet the Team
          </h3>
          <Link
            href="/teams"
            className="text-sm text-white-600 hover:underline"
            aria-label="View all team members"
          >
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              name: "Rahim H.",
              role: "Founder & CEO",
              img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
            },
            {
              name: "Lina S.",
              role: "Head of Operations",
              img: "https://images.unsplash.com/photo-1545996124-1f3d1c7f6f7e?q=80&w=600&auto=format&fit=crop",
            },
            {
              name: "Marcus D.",
              role: "Lead Guide",
              img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=600&auto=format&fit=crop",
            },
            {
              name: "Amira K.",
              role: "Customer Success",
              img: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=600&auto=format&fit=crop",
            },
          ].map((p) => (
            <div
              key={p.name}
              className="bg-gradient-to-tr from-indigo-700/80 to-purple-700/70 rounded-2xl p-4 text-center shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={p.img}
                alt={p.name}
                className="mx-auto h-28 w-28 rounded-full object-cover border-2 border-white/30"
              />
              <div className="mt-3 font-semibold text-white">{p.name}</div>
              <div className="text-sm text-white/80">{p.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNERS */}
      <section className="mb-12">
        <h3 className="text-3xl font-extrabold mb-8 text-center bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
          Partners
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {["Airline Co", "StayFinder", "LocalGuides", "EcoTrust"].map(
            (partner) => (
              <div
                key={partner}
                className="flex items-center justify-center p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 text-white font-semibold hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                {partner}
              </div>
            )
          )}
        </div>
      </section>

      {/* CTA */}
      <ReadyToPlan />
    </main>
  );
}
