export default function Loading() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-15">
      {/* Title Skeleton */}
      <div className="h-12 sm:h-16 w-3/4 mx-auto mb-10 rounded bg-gray-700 animate-pulse"></div>

      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="space-y-4 animate-pulse">
            {/* Image Placeholder */}
            <div className="h-48 w-full rounded-2xl bg-gray-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 opacity-50 animate-[pulse_1.5s_ease-in-out_infinite]"></div>
            </div>

            {/* Title Placeholder */}
            <div className="h-6 bg-gray-600 rounded w-3/4 mx-auto"></div>

            {/* Subtitle Placeholder */}
            <div className="h-4 bg-gray-600 rounded w-1/2 mx-auto"></div>
          </div>
        ))}
      </div>
    </main>
  );
}
