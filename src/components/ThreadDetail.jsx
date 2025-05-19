import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { HiOutlineThumbDown, HiThumbDown } from "react-icons/hi";
import { postedAt } from "../utils";
import { useDispatch } from "react-redux";
import {
  asyncDisLikeThreadDetail,
  asyncLikeThreadDetail,
  asyncNeutralizeLikeThreadDetail,
} from "../states/threadDetail/action";

export default function ThreadDetail({
  title,
  body,
  category,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  authUser,
}) {
  const dispatch = useDispatch();

  const onLikeClick = (event) => {
    event.stopPropagation();
    dispatch(asyncLikeThreadDetail());
  };

  const onDisLikeClick = (event) => {
    event.stopPropagation();
    dispatch(asyncDisLikeThreadDetail());
  };

  const onNeutralizedClick = (event) => {
    event.stopPropagation();
    dispatch(asyncNeutralizeLikeThreadDetail());
  };

  return (
    <div className="bg-background-light rounded-t-xl p-8">
      <header className="flex flex-col gap-2 mb-4">
        <span className="border w-fit rounded-md px-2 py-[2px]">
          #{category}
        </span>
        <h2 className="font-bold text-2xl">{title}</h2>
      </header>
      <div dangerouslySetInnerHTML={{ __html: body }}></div>
      <footer className="flex flex-col gap-2">
        <div className="flex gap-4">
          <button
            className="flex justify-center items-center gap-1"
            onClick={
              upVotesBy.includes(authUser?.id)
                ? onNeutralizedClick
                : onLikeClick
            }
          >
            {upVotesBy.includes(authUser?.id) ? (
              <FaHeart className="text-red-600" />
            ) : (
              <FaRegHeart />
            )}
            <span>{upVotesBy.length}</span>
          </button>
          <button
            className="flex justify-center items-center gap-1"
            onClick={
              downVotesBy.includes(authUser?.id)
                ? onNeutralizedClick
                : onDisLikeClick
            }
          >
            {downVotesBy.includes(authUser?.id) ? (
              <HiThumbDown />
            ) : (
              <HiOutlineThumbDown />
            )}
            <span>{downVotesBy.length}</span>
          </button>
        </div>
        <div className="flex justify-between text-xs">
          <p>{postedAt(createdAt)}</p>
          <p>
            dibuat oleh <strong>{owner.name}</strong>
          </p>
        </div>
      </footer>
      <div></div>
    </div>
  );
}
