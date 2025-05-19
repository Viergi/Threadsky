import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { GoCommentDiscussion } from "react-icons/go";
import { HiOutlineThumbDown, HiThumbDown } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { postedAt } from "../utils";
import {
  asyncDisLikeThread,
  asyncLikeThread,
  asyncNeutralizeLikeThread,
} from "../states/threads/action";

export default function VotesButtons({
  id,
  upVotesBy,
  downVotesBy,
  totalComments,
  createdAt,
}) {
  const authUser = useSelector((state) => state.authUser);
  const dispatch = useDispatch();

  const onLike = (event) => {
    event.stopPropagation();
    dispatch(asyncLikeThread(id));
  };

  const onDisLike = (event) => {
    event.stopPropagation();
    dispatch(asyncDisLikeThread(id));
  };

  const onNeutralizeVote = (event) => {
    event.stopPropagation();
    dispatch(asyncNeutralizeLikeThread(id));
  };

  return (
    <footer className="flex justify-between items-center">
      <div className="flex gap-4">
        <button
          className="flex justify-center items-center gap-1"
          onClick={upVotesBy.includes(authUser?.id) ? onNeutralizeVote : onLike}
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
            downVotesBy.includes(authUser?.id) ? onNeutralizeVote : onDisLike
          }
        >
          {downVotesBy.includes(authUser?.id) ? (
            <HiThumbDown />
          ) : (
            <HiOutlineThumbDown />
          )}
          <span>{downVotesBy.length}</span>
        </button>
        <p className="flex justify-center items-center gap-1">
          <GoCommentDiscussion />
          <span>{totalComments}</span>
        </p>
      </div>
      <div className="flex justify-between text-xs">
        <p>{postedAt(createdAt)}</p>
      </div>
    </footer>
  );
}
