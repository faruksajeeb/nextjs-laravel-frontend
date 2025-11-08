export default function MissionVision() {
  return (
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
  );
}
