export default function Loading() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8 text-white animate-pulse">
      {/* left / main */}
      <div className="lg:col-span-2 space-y-6">
        {/* hero */}
        <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-700 h-80 w-full"></div>

        {/* header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2 flex-1">
            <div className="h-8 bg-gray-600 rounded w-3/4"></div>
            <div className="h-4 bg-gray-600 rounded w-1/3 mt-1"></div>
            <div className="flex gap-2 mt-2 flex-wrap">
              <div className="h-6 w-16 bg-gray-600 rounded-full"></div>
              <div className="h-6 w-20 bg-gray-600 rounded-full"></div>
            </div>
          </div>
          <div className="text-right space-y-1">
            <div className="h-4 bg-gray-600 rounded w-16 mx-auto md:mx-0"></div>
            <div className="h-6 bg-gray-500 rounded w-24 mx-auto md:mx-0"></div>
            <div className="h-3 bg-gray-600 rounded w-12 mx-auto md:mx-0"></div>
          </div>
        </div>

        {/* overview */}
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg space-y-2">
          <div className="h-6 bg-gray-600 rounded w-32"></div>
          <div className="h-4 bg-gray-700 rounded w-full"></div>
          <div className="h-4 bg-gray-700 rounded w-5/6"></div>
          <div className="h-4 bg-gray-700 rounded w-4/6"></div>
        </div>

        {/* itinerary */}
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg space-y-4">
          <div className="h-6 bg-gray-600 rounded w-32"></div>
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="p-4 rounded-xl border border-white/6 bg-white/3 space-y-2"
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-gray-600"></div>
                <div className="h-4 bg-gray-700 rounded w-32"></div>
              </div>
              <div className="h-3 bg-gray-700 rounded w-full"></div>
              <div className="h-3 bg-gray-700 rounded w-5/6"></div>
            </div>
          ))}
        </div>

        {/* included / excluded */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg space-y-2"
            >
              <div className="h-5 bg-gray-600 rounded w-40"></div>
              <div className="space-y-2 mt-2">
                {Array.from({ length: 4 }).map((_, j) => (
                  <div key={j} className="h-3 bg-gray-700 rounded w-full"></div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* gallery */}
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg">
          <div className="h-5 bg-gray-600 rounded w-32"></div>
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-28 bg-gray-700 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>

      {/* sidebar */}
      <aside className="lg:col-span-1 space-y-4">
        <div className="sticky top-6 bg-white/6 backdrop-blur-md border border-white/8 rounded-2xl p-5 shadow-xl space-y-2">
          <div className="h-4 bg-gray-600 rounded w-20"></div>
          <div className="h-6 bg-gray-500 rounded w-32"></div>
          <div className="h-3 bg-gray-600 rounded w-16"></div>
          <div className="h-10 bg-gray-700 rounded"></div>
          <div className="h-10 bg-gray-700 rounded"></div>
          <div className="h-10 bg-gray-700 rounded"></div>
        </div>

        <div className="p-4 bg-white/6 rounded-lg shadow-sm text-sm text-gray-300 space-y-2">
          <div className="h-4 bg-gray-600 rounded w-32"></div>
          <div className="h-3 bg-gray-700 rounded w-3/4"></div>
        </div>
      </aside>
    </main>
  );
}
