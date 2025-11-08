export default function PackagesLoader({ count = 6 }) {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      {/* header skeleton */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8 animate-pulse">
        <div className="space-y-2">
          <div className="h-8 w-64 bg-gray-700 rounded"></div>
          <div className="h-4 w-80 bg-gray-600 rounded"></div>
        </div>

        <div className="flex gap-3 items-center w-full md:w-auto">
          <div className="h-10 w-64 bg-gray-700 rounded"></div>
          <div className="h-10 w-32 bg-gray-700 rounded"></div>
          <div className="h-10 w-32 bg-gray-700 rounded"></div>
          <div className="h-10 w-20 bg-gray-700 rounded"></div>
        </div>
      </div>

      {/* packages grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: count }).map((_, idx) => (
          <div
            key={idx}
            className="rounded-2xl overflow-hidden shadow-xl bg-gray-700/30 flex flex-col animate-pulse"
          >
            {/* image */}
            <div className="h-48 bg-gray-600"></div>

            {/* content */}
            <div className="p-5 flex-1 flex flex-col gap-3">
              <div className="h-5 w-3/4 bg-gray-500 rounded"></div>
              <div className="h-4 w-1/2 bg-gray-500 rounded"></div>
              <div className="flex gap-2 mt-auto">
                <div className="h-8 w-20 bg-gray-600 rounded"></div>
                <div className="h-8 w-24 bg-gray-600 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}