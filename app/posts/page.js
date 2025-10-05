// app/posts/page.js
import Link from "next/link";
import { Suspense } from "react";
import PostsList from "./PostsList";
import PostsSkeleton from "./PostsSkeleton";

export default function PostsPage() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Posts</h1>
        <Link
          href="/posts/new"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          New Post
        </Link>
      </div>

      <Suspense fallback={<PostsSkeleton />}>
        <PostsList />
      </Suspense>
    </main>
  );
}
