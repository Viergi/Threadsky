import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postedAt } from "../utils";
import {
  asyncDisLikeComment,
  asyncLikeComment,
  asyncNeutralizeComment,
} from "../states/threadDetail/action";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { HiOutlineThumbDown, HiThumbDown } from "react-icons/hi";

export default function Comment({
  id,
  content,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
}) {
  const authUser = useSelector((state) => state.authUser);
  const dispatch = useDispatch();

  const onLike = () => {
    dispatch(asyncLikeComment(id));
  };
  const onDisLike = () => {
    dispatch(asyncDisLikeComment(id));
  };
  const onNeutralize = () => {
    dispatch(asyncNeutralizeComment(id));
  };

  return (
    <div className="flex flex-col py-2">
      <header className="flex gap-1 items-center">
        <img
          src={owner.avatar}
          alt="Gambar profil"
          className="h-8 w-8 rounded-full shadow-sm"
        />
        <span className="grow text-sm font-bold">{owner.name}</span>
        <span className="text-xs">{postedAt(createdAt)}</span>
      </header>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
      <footer className="flex flex-col gap-2 ">
        <div className="flex gap-4">
          <button
            className="flex justify-center items-center gap-1"
            onClick={upVotesBy.includes(authUser?.id) ? onNeutralize : onLike}
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
              downVotesBy.includes(authUser?.id) ? onNeutralize : onDisLike
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
      </footer>
    </div>
  );
}
