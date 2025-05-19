import { describe, it, expect } from "vitest";
import threadDetailReducer from "./reducer";
import { ActionType } from "./action";

/**
 * test scenario for threadDetailReducer
 *
 * - threadDetailReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the thread detail when given by RECEIVE_THREAD_DETAIL action
 *  - should return null when given by CLEAR_THREAD_DETAIL action
 *  - should return the details of the thread which thread has been liked when given by the LIKE_THREAD_DETAIL action
 *  - should return the details of the thread which thread has been disliked when given by DISLIKE_THREAD_DETAIL action
 *  - should return the details of the thread which thread has been neutralized when given by NEUTRALIZE_THREAD_DETAIL action
 *  - should return the details of the thread which thread has been comment when given by ADD_COMMENT action
 *  - should return the details of the thread which comment has been liked when given by LIKE_COMMENT action
 *  - should return the details of the thread which comment has been disliked when given by DISLIKE_COMMENT action
 *  - should return the details of the thread which comment has been neutralize when given by NEUTRALIZE_COMMENT action
 */

describe("threadDetailReducer function", () => {
  it("should return the initial state when given by unknown action", () => {
    // arrange
    const initialState = null;
    const action = { type: "UNKNOWN" };
    // action
    const nextState = threadDetailReducer(initialState, action);
    // assert
    expect(nextState).toEqual(initialState);
  });

  it("should return the thread detail when given by RECEIVE_THREAD_DETAIL action", () => {
    // arrange
    const initialState = null;
    const action = {
      type: ActionType.RECEIVE_THREAD_DETAIL,
      payload: {
        threadDetail: {
          id: "thread-1",
          title: "Thread Pertama",
          body: "Ini adalah thread pertama",
          category: "General",
          createdAt: "2021-06-21T07:00:00.000Z",
          owner: {
            id: "users-1",
            name: "John Doe",
            avatar: "https://generated-image-url.jpg",
          },
          upVotesBy: [],
          downVotesBy: [],
          comments: [
            {
              id: "comment-1",
              content: "Ini adalah komentar pertama",
              createdAt: "2021-06-21T07:00:00.000Z",
              owner: {
                id: "users-1",
                name: "John Doe",
                avatar: "https://generated-image-url.jpg",
              },
              upVotesBy: [],
              downVotesBy: [],
            },
          ],
        },
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threadDetail);
  });

  it("should return null when given by CLEAR_THREAD_DETAIL action", () => {
    // arrange
    const initialState = {
      id: "thread-1",
      title: "Thread Pertama",
      body: "Ini adalah thread pertama",
      category: "General",
      createdAt: "2021-06-21T07:00:00.000Z",
      owner: {
        id: "users-1",
        name: "John Doe",
        avatar: "https://generated-image-url.jpg",
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: "comment-1",
          content: "Ini adalah komentar pertama",
          createdAt: "2021-06-21T07:00:00.000Z",
          owner: {
            id: "users-1",
            name: "John Doe",
            avatar: "https://generated-image-url.jpg",
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: ActionType.CLEAR_THREAD_DETAIL,
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(null);
  });

  it("should return the details of the thread which thread has been liked when given by the LIKE_THREAD_DETAIL action", () => {
    // arrange
    const initialState = {
      id: "thread-1",
      title: "Thread Pertama",
      body: "Ini adalah thread pertama",
      category: "General",
      createdAt: "2021-06-21T07:00:00.000Z",
      owner: {
        id: "users-1",
        name: "John Doe",
        avatar: "https://generated-image-url.jpg",
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: "comment-1",
          content: "Ini adalah komentar pertama",
          createdAt: "2021-06-21T07:00:00.000Z",
          owner: {
            id: "users-1",
            name: "John Doe",
            avatar: "https://generated-image-url.jpg",
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: ActionType.LIKE_THREAD_DETAIL,
      payload: {
        userId: "user-1",
      },
    };
    // action
    const nextState = threadDetailReducer(initialState, action);
    // assert
    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: ["user-1"],
    });
  });

  it("should return the details of the thread which thread has been disliked when given by DISLIKE_THREAD_DETAIL action", () => {
    // arrange
    const initialState = {
      id: "thread-1",
      title: "Thread Pertama",
      body: "Ini adalah thread pertama",
      category: "General",
      createdAt: "2021-06-21T07:00:00.000Z",
      owner: {
        id: "users-1",
        name: "John Doe",
        avatar: "https://generated-image-url.jpg",
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: "comment-1",
          content: "Ini adalah komentar pertama",
          createdAt: "2021-06-21T07:00:00.000Z",
          owner: {
            id: "users-1",
            name: "John Doe",
            avatar: "https://generated-image-url.jpg",
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: ActionType.DISLIKE_THREAD_DETAIL,
      payload: {
        userId: "user-1",
      },
    };
    // action
    const nextState = threadDetailReducer(initialState, action);
    // assert
    expect(nextState).toEqual({
      ...initialState,
      downVotesBy: ["user-1"],
    });
  });

  it("should return the details of the thread which thread has been neutralized when given by NEUTRALIZE_THREAD_DETAIL action", () => {
    // arrange
    const initialState = {
      id: "thread-1",
      title: "Thread Pertama",
      body: "Ini adalah thread pertama",
      category: "General",
      createdAt: "2021-06-21T07:00:00.000Z",
      owner: {
        id: "users-1",
        name: "John Doe",
        avatar: "https://generated-image-url.jpg",
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: "comment-1",
          content: "Ini adalah komentar pertama",
          createdAt: "2021-06-21T07:00:00.000Z",
          owner: {
            id: "users-1",
            name: "John Doe",
            avatar: "https://generated-image-url.jpg",
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: ActionType.NEUTRALIZE_THREAD_DETAIL,
      payload: {
        userId: "user-1",
      },
    };

    const initialStateUpvoteState = { ...initialState, upVotesBy: ["user-1"] };
    const initialStateDownVoteState = {
      ...initialState,
      downVotesBy: ["user-1"],
    };
    // action
    const nextState = threadDetailReducer(initialStateUpvoteState, action);
    // assert
    expect(nextState).toEqual({ ...initialState, upVotesBy: [] });

    const nextState2 = threadDetailReducer(initialStateDownVoteState, action);
    // assert
    expect(nextState2).toEqual({ ...initialState, downVotesBy: [] });
  });

  it("should return the details of the thread which thread has been comment when given by ADD_COMMENT action", () => {
    // arrange
    const initialState = {
      id: "thread-1",
      title: "Thread Pertama",
      body: "Ini adalah thread pertama",
      category: "General",
      createdAt: "2021-06-21T07:00:00.000Z",
      owner: {
        id: "users-1",
        name: "John Doe",
        avatar: "https://generated-image-url.jpg",
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: "comment-1",
          content: "Ini adalah komentar pertama",
          createdAt: "2021-06-21T07:00:00.000Z",
          owner: {
            id: "users-1",
            name: "John Doe",
            avatar: "https://generated-image-url.jpg",
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: ActionType.ADD_COMMENT,
      payload: {
        content: {
          id: "comment-2",
          content: "Ini adalah komentar kedua",
          createdAt: "2021-06-22T07:00:00.000Z",
          owner: {
            id: "users-2",
            name: "John cena",
            avatar: "https://generated-image-url.jpg",
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      },
    };
    // action
    const nextState = threadDetailReducer(initialState, action);
    // assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [action.payload.content, ...initialState.comments],
    });
  });

  it("should return the details of the thread which comment has been liked when given by LIKE_COMMENT action", () => {
    // arrange
    const initialState = {
      id: "thread-1",
      title: "Thread Pertama",
      body: "Ini adalah thread pertama",
      category: "General",
      createdAt: "2021-06-21T07:00:00.000Z",
      owner: {
        id: "users-1",
        name: "John Doe",
        avatar: "https://generated-image-url.jpg",
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: "comment-1",
          content: "Ini adalah komentar pertama",
          createdAt: "2021-06-21T07:00:00.000Z",
          owner: {
            id: "users-1",
            name: "John Doe",
            avatar: "https://generated-image-url.jpg",
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: ActionType.LIKE_COMMENT,
      payload: {
        userId: "user-1",
        commentId: "comment-1",
      },
    };
    // action
    const nextState = threadDetailReducer(initialState, action);
    // assert
    expect(nextState).toEqual({
      ...initialState,
      comments: initialState.comments.map((comment) => {
        if (comment.id === action.payload.commentId) {
          return {
            ...comment,
            upVotesBy: [...comment.upVotesBy, action.payload.userId],
          };
        }
        return comment;
      }),
    });
  });

  it("should return the details of the thread which comment has been disliked when given by DISLIKE_COMMENT action", () => {
    // arrange
    const initialState = {
      id: "thread-1",
      title: "Thread Pertama",
      body: "Ini adalah thread pertama",
      category: "General",
      createdAt: "2021-06-21T07:00:00.000Z",
      owner: {
        id: "users-1",
        name: "John Doe",
        avatar: "https://generated-image-url.jpg",
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: "comment-1",
          content: "Ini adalah komentar pertama",
          createdAt: "2021-06-21T07:00:00.000Z",
          owner: {
            id: "users-1",
            name: "John Doe",
            avatar: "https://generated-image-url.jpg",
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: ActionType.DISLIKE_COMMENT,
      payload: {
        userId: "user-1",
        commentId: "comment-1",
      },
    };
    // action
    const nextState = threadDetailReducer(initialState, action);
    // assert
    expect(nextState).toEqual({
      ...initialState,
      comments: initialState.comments.map((comment) => {
        if (comment.id === action.payload.commentId) {
          return {
            ...comment,
            downVotesBy: [...comment.downVotesBy, action.payload.userId],
          };
        }
        return comment;
      }),
    });
  });

  it("should return the details of the thread which comment has been neutralize when given by NEUTRALIZE_COMMENT action", () => {
    // arrange
    const initialState = {
      id: "thread-1",
      title: "Thread Pertama",
      body: "Ini adalah thread pertama",
      category: "General",
      createdAt: "2021-06-21T07:00:00.000Z",
      owner: {
        id: "users-1",
        name: "John Doe",
        avatar: "https://generated-image-url.jpg",
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: "comment-1",
          content: "Ini adalah komentar pertama",
          createdAt: "2021-06-21T07:00:00.000Z",
          owner: {
            id: "users-1",
            name: "John Doe",
            avatar: "https://generated-image-url.jpg",
          },
          upVotesBy: [],
          downVotesBy: [],
        },
        {
          id: "comment-2",
          content: "Ini adalah komentar kedua",
          createdAt: "2021-06-22T07:00:00.000Z",
          owner: {
            id: "users-2",
            name: "John cena",
            avatar: "https://generated-image-url.jpg",
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: ActionType.NEUTRALIZE_COMMENT,
      payload: {
        userId: "user-1",
        commentId: "comment-1",
      },
    };

    const initialStateUpvotedComment = {
      ...initialState,
      comments: initialState.comments.map((comment) => {
        if (comment.id === action.payload.commentId) {
          return {
            ...comment,
            upVotesBy: ["user-1"],
          };
        }
        return comment;
      }),
    };
    const initialStateDownVotedComment = {
      ...initialState,
      comments: initialState.comments.map((comment) => {
        if (comment.id === action.payload.commentId) {
          return {
            ...comment,
            downVotesBy: ["user-1"],
          };
        }
        return comment;
      }),
    };

    // action
    const nextState = threadDetailReducer(initialStateUpvotedComment, action);
    // assert
    expect(nextState).toEqual({
      ...initialState,
      comments: initialState.comments.map((comment) => {
        if (comment.id === action.payload.commentId) {
          return {
            ...comment,
            upVotesBy: [],
          };
        }
        return comment;
      }),
    });
    const nextState2 = threadDetailReducer(
      initialStateDownVotedComment,
      action
    );
    // assert
    expect(nextState2).toEqual({
      ...initialState,
      comments: initialState.comments.map((comment) => {
        if (comment.id === action.payload.commentId) {
          return {
            ...comment,
            downVotesBy: [],
          };
        }
        return comment;
      }),
    });
  });
});
