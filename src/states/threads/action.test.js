import { describe, beforeEach, afterEach, it, vi, expect } from "vitest";
import { hideLoading, showLoading } from "react-redux-loading-bar";
import api from "../../utils/api";
import {
  addThreadActionCreator,
  asyncAddThread,
  asyncDisLikeThread,
  asyncLikeThread,
  asyncNeutralizeLikeThread,
  disLikeThreadActionCreator,
  likeThreadActionCreator,
  neutralizeThreadActionCreator,
} from "./action";

/**
 * skenario test
 *
 * - asyncAddThread thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 *
 * - asyncLikeThread thunk
 *  - should dispatch action correctly when like success
 *  - should dispatch action 2 time when like failed
 *
 * - asyncDislikeThread thunk
 *  - should dispatch action correctly when dislike success
 *  - should dispatch action 2 time when dislike failed
 *
 * - asyncNeutralizeLikeThread thunk
 *  - should dispatch action correctly when neutralize success
 *  - should dispatch action 2 time when neutralize failed
 */
const body = "this is body";
const title = "this is title";
const category = "this is category";

const fakeAddThreadResponse = {
  id: "thread-1",
  title,
  body,
  category,
  createdAt: "2021-06-21T07:00:00.000Z",
  ownerId: "users-1",
  upVotesBy: [],
  downVotesBy: [],
  totalComments: 0,
};

const fakeLikeResponse = {
  id: "vote-1",
  userId: "users-1",
  threadId: "thread-1",
  voteType: 1,
};

const fakeDislikeResponse = {
  id: "vote-1",
  userId: "users-1",
  threadId: "thread-1",
  voteType: -1,
};

const fakeNeutralizeResponse = {
  id: "vote-1",
  userId: "users-1",
  threadId: "thread-1",
  voteType: 0,
};

const fakeErrorResponse = new Error("Ups, something went wrong");

describe("asyncAddThread thunk", () => {
  beforeEach(() => {
    api._createThread = api.createThread;
  });

  afterEach(() => {
    api.createThread = api._createThread;
    // delete backup data
    delete api._createThread;
  });

  it("should set state correctly when adding data success", async () => {
    // arrange
    // stub implementation
    api.createThread = () => Promise.resolve(fakeAddThreadResponse);

    const dispatch = vi.fn();

    await asyncAddThread({ body, title, category })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      addThreadActionCreator(fakeAddThreadResponse)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it("should dispatch action and call alert correctly when data fetching failed", async () => {
    // arrange
    // stub implementation
    api.createThread = () => Promise.reject(fakeErrorResponse);

    const dispatch = vi.fn();
    window.alert = vi.fn();

    await asyncAddThread({ body, title, category })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});

describe("asyncLikeThread thunk", () => {
  beforeEach(() => {
    api._likeThread = api.likeThread;
  });

  afterEach(() => {
    api.likeThread = api._likeThread;
    // delete backup data
    delete api._likeThread;
  });

  it("should dispatch action correctly when like success", async () => {
    // arrange
    const mockState = {
      authUser: {
        id: "john_doe",
        name: "John Doe",
        email: "john@example.com",
        avatar: "https://generated-image-url.jpg",
      },
    };

    // stub implementation
    api.likeThread = () => Promise.resolve(fakeLikeResponse);
    const threadId = "thread-1";
    const dispatch = vi.fn();
    const getState = vi.fn().mockReturnValue(mockState);

    await asyncLikeThread(threadId)(dispatch, getState);

    // assert
    expect(dispatch).toHaveBeenCalledWith(
      likeThreadActionCreator({ threadId, userId: mockState.authUser.id })
    );
  });

  it("should dispatch action 2 time when like failed", async () => {
    // arrange
    const mockState = {
      authUser: {
        id: "john_doe",
        name: "John Doe",
        email: "john@example.com",
        avatar: "https://generated-image-url.jpg",
      },
    };

    // stub implementation
    api.likeThread = () => Promise.reject(fakeErrorResponse);
    const threadId = "thread-1";
    const dispatch = vi.fn();
    window.alert = vi.fn();
    const getState = vi.fn().mockReturnValue(mockState);

    await asyncLikeThread(threadId)(dispatch, getState);

    // assert
    expect(dispatch).toHaveBeenCalledWith(
      likeThreadActionCreator({ threadId, userId: mockState.authUser.id })
    );
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
    expect(dispatch).toBeCalledTimes(2);
  });
});

describe("asyncDislikeThread thunk", () => {
  beforeEach(() => {
    api._dislikeThread = api.disLikeThread;
  });

  afterEach(() => {
    api.disLikeThread = api._dislikeThread;
    // delete backup data
    delete api._dislikeThread;
  });

  it("should dispatch action correctly when dislike success", async () => {
    // arrange
    const mockState = {
      authUser: {
        id: "john_doe",
        name: "John Doe",
        email: "john@example.com",
        avatar: "https://generated-image-url.jpg",
      },
    };

    // stub implementation
    api.disLikeThread = () => Promise.resolve(fakeDislikeResponse);
    const threadId = "thread-1";
    const dispatch = vi.fn();
    const getState = vi.fn().mockReturnValue(mockState);

    await asyncDisLikeThread(threadId)(dispatch, getState);

    // assert
    expect(dispatch).toHaveBeenCalledWith(
      disLikeThreadActionCreator({ threadId, userId: mockState.authUser.id })
    );
  });

  it("should dispatch action 2 time when dislike failed", async () => {
    // arrange
    const mockState = {
      authUser: {
        id: "john_doe",
        name: "John Doe",
        email: "john@example.com",
        avatar: "https://generated-image-url.jpg",
      },
    };

    // stub implementation
    api.disLikeThread = () => Promise.reject(fakeErrorResponse);
    const threadId = "thread-1";
    const dispatch = vi.fn();
    window.alert = vi.fn();
    const getState = vi.fn().mockReturnValue(mockState);

    await asyncDisLikeThread(threadId)(dispatch, getState);

    // assert
    expect(dispatch).toHaveBeenCalledWith(
      disLikeThreadActionCreator({ threadId, userId: mockState.authUser.id })
    );
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
    expect(dispatch).toBeCalledTimes(2);
  });
});

describe("asyncNeutralizeLikeThread thunk", async () => {
  beforeEach(() => {
    api._neutralizeThread = api.neutralizeThread;
  });

  afterEach(() => {
    api.neutralizeThread = api._neutralizeThread;
    // delete backup data
    delete api._neutralizeThread;
  });

  it("should dispatch action correctly when neutralize success", async () => {
    // arrange
    const mockState = {
      authUser: {
        id: "john_doe",
        name: "John Doe",
        email: "john@example.com",
        avatar: "https://generated-image-url.jpg",
      },
    };

    // stub implementation
    api.neutralizeThread = () => Promise.resolve(fakeNeutralizeResponse);
    const threadId = "thread-1";
    const dispatch = vi.fn();
    const getState = vi.fn().mockReturnValue(mockState);

    await asyncNeutralizeLikeThread(threadId)(dispatch, getState);

    // assert
    expect(dispatch).toHaveBeenCalledWith(
      neutralizeThreadActionCreator({ threadId, userId: mockState.authUser.id })
    );
  });

  it("should dispatch action 2 time when neutralize failed", async () => {
    // arrange
    const mockState = {
      authUser: {
        id: "john_doe",
        name: "John Doe",
        email: "john@example.com",
        avatar: "https://generated-image-url.jpg",
      },
    };

    // stub implementation
    api.neutralizeThread = () => Promise.reject(fakeErrorResponse);
    const threadId = "thread-1";
    const dispatch = vi.fn();
    window.alert = vi.fn();
    const getState = vi.fn().mockReturnValue(mockState);

    await asyncNeutralizeLikeThread(threadId)(dispatch, getState);

    // assert
    expect(dispatch).toHaveBeenCalledWith(
      neutralizeThreadActionCreator({ threadId, userId: mockState.authUser.id })
    );
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
    expect(dispatch).toBeCalledTimes(2);
  });
});
