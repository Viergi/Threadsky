import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  asyncAddComment,
  asyncReceiveThreadDetail,
} from "../states/threadDetail/action";
import ThreadDetail from "../components/ThreadDetail";
import CommentInput from "../components/CommentInput";
import CommentList from "../components/CommentList";

export default function DetailPage() {
  const { id } = useParams();
  const authUser = useSelector((states) => states.authUser);
  const threadDetail = useSelector((states) => states.threadDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onComment = (content) => {
    dispatch(asyncAddComment(content));
  };

  if (!threadDetail) {
    return null;
  }

  return (
    <section className="mx-3">
      <ThreadDetail {...threadDetail} authUser={authUser}></ThreadDetail>
      {authUser ? (
        <CommentInput onComment={onComment}></CommentInput>
      ) : (
        <span className="px-8 bg-background-light flex gap-2">
          <Link className="underline text-primary" to={"/login"}>
            Login
          </Link>{" "}
          untuk komentar
        </span>
      )}
      <CommentList comments={threadDetail.comments} />
    </section>
  );
}
