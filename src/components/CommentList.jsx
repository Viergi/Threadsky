import React from "react";
import Comment from "./Comment";

export default function CommentList({ comments }) {
  return (
    <div className="flex flex-col px-8 py-4 bg-background-light rounded-b-xl">
      <span className="text-lg font-bold py-4">
        Komentar ({comments.length})
      </span>
      {comments.map((comment, index) => {
        return <Comment {...comment} key={index}></Comment>;
      })}
    </div>
  );
}
