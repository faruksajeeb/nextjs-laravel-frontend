export default function AboutPageSkeleton() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 text-white bg-black space-y-16">
      {/* HERO Skeleton */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12 animate-pulse">
      {/* Text Content */}
      <div className="space-y-6">
        {/* Heading */}
        <div className="h-12 w-3/4 bg-gray-700 rounded"></div>
        {/* Paragraph */}
        <div className="h-4 bg-gray-600 rounded w-full"></div>
        <div className="h-4 bg-gray-600 rounded w-5/6"></div>
        <div className="h-4 bg-gray-600 rounded w-4/6"></div>
        {/* List items */}
        <div className="space-y-2 mt-4">
          <div className="h-3 bg-gray-500 rounded w-2/3"></div>
          <div className="h-3 bg-gray-500 rounded w-3/4"></div>
          <div className="h-3 bg-gray-500 rounded w-1/2"></div>
        </div>
        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <div className="h-10 w-32 bg-gray-700 rounded-2xl"></div>
          <div className="h-10 w-32 bg-gray-600 rounded-2xl"></div>
        </div>
      </div>

      {/* Image */}
      <div className="rounded-3xl overflow-hidden shadow-2xl h-96 bg-gray-700"></div>
    </section>

      {/* MISSION / VISION / VALUES Skeleton */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-pulse">
      {[1, 2, 3].map((_, idx) => (
        <div
          key={idx}
          className="p-6 rounded-2xl shadow-lg bg-gray-700 h-40"
        >
          {/* Title */}
          <div className="h-5 w-1/2 bg-gray-500 rounded mb-3"></div>
          {/* Description */}
          <div className="space-y-2">
            <div className="h-3 bg-gray-600 rounded w-full"></div>
            <div className="h-3 bg-gray-600 rounded w-5/6"></div>
            <div className="h-3 bg-gray-600 rounded w-4/6"></div>
          </div>
        </div>
      ))}
    </section>

      {/* TIMELINE Skeleton */}
      <div className="space-y-6">
        <div className="h-6 w-1/4 bg-gray-600 rounded animate-pulse"></div>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex items-start gap-4 animate-pulse">
            <div className="h-12 w-12 bg-gray-700 rounded-full"></div>
            <div className="space-y-2 flex-1">
              <div className="h-4 bg-gray-500 rounded w-3/4"></div>
              <div className="h-3 bg-gray-500 rounded w-full"></div>
            </div>
          </div>
        ))}
      </div>

      {/* TEAM Skeleton */}
      <div>
        <div className="h-6 w-1/4 bg-gray-600 rounded mb-4 animate-pulse"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center space-y-3 animate-pulse">
              <div className="h-28 w-28 bg-gray-700 rounded-full"></div>
              <div className="h-4 bg-gray-500 rounded w-3/4"></div>
              <div className="h-3 bg-gray-500 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>

      {/* PARTNERS Skeleton */}
      <div>
        <div className="h-6 w-1/4 bg-gray-600 rounded mb-4 animate-pulse"></div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-16 bg-gray-700 rounded-lg animate-pulse"></div>
          ))}
        </div>
      </div>

      {/* CTA Skeleton */}
      <div className="h-32 rounded-2xl bg-gray-700 animate-pulse"></div>
    </main>
  );
}
