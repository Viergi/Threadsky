import React, { useState } from "react";

export default function CommentInput({ onComment }) {
  const [comment, setComment] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (comment.trim()) {
      onComment(comment);
      setComment("");
    }
  };

  function handleTextChange({ target }) {
    if (target.value.length <= 320) {
      setComment(target.value);
    }
  }

  return (
    <form
      className="flex flex-col gap-2 px-8 bg-background-light pt-4"
      onSubmit={onSubmit}
    >
      <label htmlFor="comment">Beri Komentar</label>
      <textarea
        type="text"
        name="comment"
        id="comment"
        className="border p-2"
        placeholder="Komen disini"
        value={comment}
        onChange={handleTextChange}
      />
      <button type="submit" className="bg-primary py-1">
        Comment
      </button>
    </form>
  );
}
