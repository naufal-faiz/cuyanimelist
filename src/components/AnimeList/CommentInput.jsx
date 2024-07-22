"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CommentInput = ({ anime_mal_id, user_email, username, anime_title }) => {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);

  const router = useRouter()

  const handleInput = (event) => {
    setComment(event.target.value);
  };

  const handlePosting = async (event) => {
    event.preventDefault();

    const data = { anime_mal_id, user_email, comment, username, anime_title };

    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const createComment = await response.json();
    if (createComment.status) {
      setIsCreated(createComment.isCreated);
      setComment("");
      router.refresh()
    }
    return;
  };

  return (
    <div className="flex flex-col gap-2">
      {isCreated && <p className="text-myColor-primary">Komentar berhasil dikirim!</p>}
      <textarea
        onChange={handleInput}
        className="w-full h-32 text-xl p-4"
        value={comment}
        placeholder="Tulis komentar..."
      ></textarea>
      <button
        onClick={handlePosting}
        className="py-2 px-3 w-52 bg-myColor-accent"
      >
        Kirim!
      </button>
    </div>
  );
};

export default CommentInput;
