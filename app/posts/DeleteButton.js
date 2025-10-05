// app/posts/DeleteButton.js
"use client";
import { deletePost } from "@/lib/api";

export default function DeleteButton({ id, onDeleted }) {
  async function handleDelete() {
    if (!confirm("Delete this post?")) return;
    try {
      await deletePost(id);
      onDeleted?.(id);
    } catch (e) {
      alert("Failed to delete");
    }
  }

  return (
    <button onClick={handleDelete} className="text-red-600">
      Delete
    </button>
  );
}