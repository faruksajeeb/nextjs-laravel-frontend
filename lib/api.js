import { API_BASE } from "./config";

export async function fetchPosts() {
  const res = await fetch(`${API_BASE}/posts`);
  if (!res.ok) throw new Error('Failed fetching posts');
  return res.json();
}

export async function createPost(payload) {
  const res = await fetch(`${API_BASE}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const err = await res.json();
    throw err;
  }
  return res.json();
}

export async function getPost(id) {
  const res = await fetch(`${API_BASE}/posts/${id}`);
  if (!res.ok) throw new Error('Post not found');
  return res.json();
}

export async function updatePost(id, payload) {
  const res = await fetch(`${API_BASE}/posts/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const err = await res.json();
    throw err;
  }
  return res.json();
}

export async function deletePost(id) {
  const res = await fetch(`${API_BASE}/posts/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete');
  return true;
}
