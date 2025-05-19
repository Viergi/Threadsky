import { hideLoading, showLoading } from "react-redux-loading-bar";
import api from "../../utils/api";

const ActionType = {
  RECEIVE_THREADS: "RECEIVE_THREADS",
  ADD_THREAD: "ADD_THREAD",
  LIKE_THREAD: "LIKE_THREAD",
  DISLIKE_THREAD: "DISLIKE_THREAD",
  NEUTRALIZE_THREAD: "NEUTRALIZE_THREAD",
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  };
}

function likeThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.LIKE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function disLikeThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.DISLIKE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function neutralizeThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.NEUTRALIZE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncAddThread({ body, title, category }) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const thread = await api.createThread({ body, title, category });
      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncLikeThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    if (!authUser) return alert("Log in first");
    dispatch(likeThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.likeThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(likeThreadActionCreator({ threadId, userId: authUser.id }));
    }
  };
}

function asyncDisLikeThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    if (!authUser) return alert("Log in first");
    dispatch(disLikeThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.disLikeThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(disLikeThreadActionCreator({ threadId, userId: authUser.id }));
    }
  };
}

function asyncNeutralizeLikeThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    if (!authUser) return alert("Log in first");

    dispatch(neutralizeThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.neutralizeThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(
        neutralizeThreadActionCreator({ threadId, userId: authUser.id })
      );
    }
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  likeThreadActionCreator,
  disLikeThreadActionCreator,
  neutralizeThreadActionCreator,
  asyncAddThread,
  asyncLikeThread,
  asyncDisLikeThread,
  asyncNeutralizeLikeThread,
};
