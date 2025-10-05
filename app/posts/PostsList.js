// app/posts/PostsList.js
import Link from "next/link";
import { fetchPosts } from "@/lib/api";
import DeleteButton from "./DeleteButton";

export default async function PostsList() {
  const posts = await fetchPosts();

  if (!posts || posts.length === 0) {
    return <p>No posts yet</p>;
  }

  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <li key={post.id} className="p-4 border rounded">
          <div className="flex justify-between">
            <div>
              <h2 className="font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-600">{post.body?.slice(0, 120)}</p>
            </div>
            <div className="space-x-2">
              <Link href={`/posts/${post.id}`} className="text-blue-600">
                View / Edit
              </Link>
              <DeleteButton id={post.id} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
