import { hideLoading, showLoading } from "react-redux-loading-bar";
import api from "../../utils/api";

const ActionType = {
  RECEIVE_THREAD_DETAIL: "RECEIVE_THREAD_DETAIL",
  CLEAR_THREAD_DETAIL: "CLEAR_THREAD_DETAIL",
  LIKE_THREAD_DETAIL: "LIKE_THREAD_DETAIL",
  DISLIKE_THREAD_DETAIL: "DISLIKE_THREAD_DETAIL",
  NEUTRALIZE_THREAD_DETAIL: "NEUTRALIZE_LIKE_THREAD_DETAIL",
  ADD_COMMENT: "ADD_COMMENT",
  LIKE_COMMENT: "LIKE_COMMENT",
  DISLIKE_COMMENT: "DISLIKE_COMMENT",
  NEUTRALIZE_COMMENT: "NEUTRALIZE_COMMENT",
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function likeThreadDetailActionCreator(userId) {
  return {
    type: ActionType.LIKE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function disLikeThreadDetailActionCreator(userId) {
  return {
    type: ActionType.DISLIKE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function neutralizeThreadDetailActionCreator(userId) {
  return {
    type: ActionType.NEUTRALIZE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function addCommentActionCreator(content) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      content,
    },
  };
}

function likeCommentActionCreator({ userId, commentId }) {
  return {
    type: ActionType.LIKE_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
}

function disLikeCommentActionCreator({ userId, commentId }) {
  return {
    type: ActionType.DISLIKE_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
}

function neutralizeCommentActionCreator({ userId, commentId }) {
  return {
    type: ActionType.NEUTRALIZE_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());

    dispatch(clearThreadDetailActionCreator());
    try {
      const threadDetail = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncLikeThreadDetail() {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    if (!authUser) return alert("login dulu bang");
    dispatch(likeThreadDetailActionCreator(authUser.id));
    try {
      await api.likeThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
      dispatch(likeThreadDetailActionCreator(authUser.id));
    }
  };
}

function asyncDisLikeThreadDetail() {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    if (!authUser) return alert("login dulu bang");
    dispatch(disLikeThreadDetailActionCreator(authUser.id));

    try {
      await api.disLikeThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
      dispatch(disLikeThreadDetailActionCreator(threadDetail.id));
    }
  };
}

function asyncNeutralizeLikeThreadDetail() {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    if (!authUser) return alert("login dulu bang");
    dispatch(neutralizeThreadDetailActionCreator(authUser.id));

    try {
      await api.neutralizeThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
      dispatch(neutralizeThreadDetailActionCreator(threadDetail.id));
    }
  };
}

function asyncAddComment(content) {
  return async (dispatch, getState) => {
    const { threadDetail } = getState();
    try {
      const comment = await api.createComment({
        threadId: threadDetail.id,
        content,
      });
      dispatch(addCommentActionCreator(comment));
    } catch (error) {
      alert(error);
    }
  };
}

function asyncLikeComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    if (!authUser) return alert("login dulu bang");
    dispatch(likeCommentActionCreator({ userId: authUser.id, commentId }));

    try {
      await api.likeComment({ threadId: threadDetail.id, commentId });
    } catch (error) {
      alert(error.message);
      dispatch(likeCommentActionCreator({ userId: authUser.id, commentId }));
    }
  };
}

function asyncDisLikeComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    if (!authUser) return alert("login dulu bang");
    dispatch(disLikeCommentActionCreator({ userId: authUser.id, commentId }));

    try {
      await api.disLikeComment({ threadId: threadDetail.id, commentId });
    } catch (error) {
      alert(error.message);
      dispatch(disLikeCommentActionCreator({ userId: authUser.id, commentId }));
    }

    dispatch(hideLoading());
  };
}

function asyncNeutralizeComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    if (!authUser) return alert("login dulu bang");
    dispatch(
      neutralizeCommentActionCreator({ userId: authUser.id, commentId })
    );
    try {
      await api.neutralizeComment({ threadId: threadDetail.id, commentId });
    } catch (error) {
      alert(error.message);
      dispatch(
        neutralizeCommentActionCreator({ userId: authUser.id, commentId })
      );
    }
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  likeThreadDetailActionCreator,
  disLikeThreadDetailActionCreator,
  neutralizeThreadDetailActionCreator,
  addCommentActionCreator,
  likeCommentActionCreator,
  disLikeCommentActionCreator,
  neutralizeCommentActionCreator,
  asyncReceiveThreadDetail,
  asyncLikeThreadDetail,
  asyncDisLikeThreadDetail,
  asyncNeutralizeLikeThreadDetail,
  asyncAddComment,
  asyncLikeComment,
  asyncDisLikeComment,
  asyncNeutralizeComment,
};
