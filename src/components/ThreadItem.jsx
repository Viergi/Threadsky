import React from "react";
import { Link } from "react-router-dom";
import VotesButtons from "./VotesButtons";

export default function ThreadItem({
  id,
  title,
  body,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  totalComments,
  user,
}) {
  return (
    <div className="flex border-t">
      <div className="flex flex-col gap-2 p-4 w-full">
        <header className="flex gap-2 items-center">
          <img
            src={user.avatar}
            className="h-10 w-10 rounded-full"
            data-testid="img"
          />
          <div className="flex flex-col">
            <span data-testid="name">{user.name}</span>
            <span className="text-xs text-black/50" data-testid="email">
              {user.email}
            </span>
          </div>
        </header>
        <div className="flex flex-col gap-3 mb-5">
          <p className="font-extrabold text-lg">
            <Link to={`/thread/${id}`} data-testid="title">
              {title}
            </Link>
          </p>
          <div
            data-testid="body"
            dangerouslySetInnerHTML={{ __html: body }}
            className="line-clamp-4 text-sm overflow-ellipsis"
          ></div>
          <span
            className="w-fit rounded-md text-primary"
            data-testid="category"
          >
            #{category}
          </span>
        </div>
        <VotesButtons
          id={id}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
          createdAt={createdAt}
          totalComments={totalComments}
        />
      </div>
    </div>
  );
}
