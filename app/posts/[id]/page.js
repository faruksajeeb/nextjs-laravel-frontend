// app/posts/[id]/page.js
import { Suspense } from 'react';
import PostDetails from './PostDetails';

export default function PostEdit({ params }) {
  const { id } = params;

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-xl font-semibold mb-4">Edit Post</h1>

      <Suspense fallback={<p>Loading post...</p>}>
        <PostDetails id={id} />
      </Suspense>
    </main>
  );
}
