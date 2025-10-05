// app/posts/PostsSkeleton.js
export default function PostsSkeleton() {
  return (
    <ul className="space-y-4 animate-pulse">
      {[...Array(3)].map((_, i) => (
        <li key={i} className="p-4 border rounded">
          <div className="flex justify-between">
            <div className="space-y-2 w-full">
              <div className="h-4 bg-gray-300 rounded w-1/3"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3"></div>
            </div>
            <div className="flex space-x-2">
              <div className="h-4 w-16 bg-gray-300 rounded"></div>
              <div className="h-4 w-16 bg-gray-300 rounded"></div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
