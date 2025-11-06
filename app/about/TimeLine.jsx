export default function TimeLine() {
  const histories = [
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
  ];
  return (
    <section className="mb-12">
      <h3 className="text-3xl font-extrabold mb-8 text-center bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
        Our Story
      </h3>

      <ol className="relative border-l-2 border-indigo-300 ml-6 space-y-8">
        {histories.map((item, idx) => (
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
  );
}
