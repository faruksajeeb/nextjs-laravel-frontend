export default function DestinationDetailSkeleton() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-white">
      {/* Hero Skeleton */}
      <div className="rounded-2xl overflow-hidden shadow-2xl mb-8">
        <div className="relative h-64 md:h-96 bg-gray-700 animate-pulse"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: main content */}
        <div className="lg:col-span-2 space-y-6">
          {/* About / Highlights Skeleton */}
          <section className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg space-y-4 animate-pulse">
            <div className="h-6 w-1/3 bg-gray-600 rounded"></div>
            <div className="h-4 bg-gray-600 rounded w-full"></div>
            <div className="h-4 bg-gray-600 rounded w-5/6"></div>

            <div className="mt-4 space-y-2">
              <div className="h-5 w-1/4 bg-gray-600 rounded"></div>
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-3 bg-gray-500 rounded w-3/4"></div>
              ))}
            </div>
          </section>

          {/* Related Packages Skeleton */}
          <section className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg space-y-4 animate-pulse">
            <div className="h-6 w-1/2 bg-gray-600 rounded"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/6 border border-white/6 space-y-3">
                  <div className="h-4 w-3/4 bg-gray-600 rounded"></div>
                  <div className="h-3 w-1/2 bg-gray-500 rounded"></div>
                  <div className="h-3 w-full bg-gray-500 rounded"></div>
                  <div className="flex gap-2 mt-2">
                    <div className="h-6 w-16 bg-gray-600 rounded"></div>
                    <div className="h-6 w-16 bg-gray-600 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Gallery Skeleton */}
          <section className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg space-y-3 animate-pulse">
            <div className="h-6 w-1/4 bg-gray-600 rounded"></div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-28 bg-gray-700 rounded-lg"></div>
              ))}
            </div>
          </section>

          {/* Travel Tips Skeleton */}
          <section className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg space-y-2 animate-pulse">
            <div className="h-6 w-1/4 bg-gray-600 rounded"></div>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-3 bg-gray-500 rounded w-3/4"></div>
            ))}
          </section>

          {/* Map Skeleton */}
          <section className="bg-white/4 p-6 rounded-2xl shadow-md h-64 animate-pulse"></section>
        </div>

        {/* Sidebar Skeleton */}
        <aside className="space-y-4">
          <div className="bg-white/6 backdrop-blur-md border border-white/8 rounded-2xl p-5 shadow-lg space-y-3 animate-pulse h-40"></div>
          <div className="p-4 bg-white/6 rounded-lg shadow-sm text-sm text-gray-300 animate-pulse h-24"></div>
        </aside>
      </div>
    </main>
  );
}
