// app/new/page.js
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { createPost } from '@/lib/api';
import { useRouter } from 'next/navigation';

export default function NewPost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await createPost({ title, body });
      router.push('/posts');
    } catch (err) {
      alert('Failed to create post');
      console.error(err);
    }
  }

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-xl font-semibold mb-4">New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm">Title</label>
          <input value={title} onChange={e=>setTitle(e.target.value)} required className="w-full p-2 border rounded bg-white" />
        </div>
        <div>
          <label className="block text-sm">Body</label>
          <textarea value={body} onChange={e=>setBody(e.target.value)} className="w-full p-2 border rounded bg-white" />
        </div>
        <div>
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Create</button>
          <Link href="/posts" className="bg-blue-600 text-white px-4 py-2 rounded">Manage Posts</Link>
        </div>
      </form>
    </main>
  );
}
