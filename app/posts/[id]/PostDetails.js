// app/posts/[id]/PostDetails.js
import { getPost } from '@/lib/api';

export default async function PostDetails({ id }) {
  const post = await getPost(id); // This runs on the server with Suspense

  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm">Title</label>
        <input
          defaultValue={post.title}
          name="title"
          required
          className="w-full p-2 border rounded bg-white"
        />
      </div>
      <div>
        <label className="block text-sm">Body</label>
        <textarea
          defaultValue={post.body || ''}
          name="body"
          className="w-full p-2 border rounded bg-white"
        />
      </div>
      <div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Save
        </button>
      </div>
    </form>
  );
}
