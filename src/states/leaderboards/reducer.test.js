import { describe, it, expect } from "vitest";
import leaderboardsReducer from "./reducer";
import { ActionType } from "./action";

/**
 * test scenario for leaderboardsReducer
 *
 * - leaderboardsReducers function
 *  - should return the initial state when given by unknown action
 *  - should return the leaderboards when given by RECEIVE_LEADERBOARDS action
 *  - should return null when given by CLEAR_LEADERBOARDS action
 */

describe("usersReducer function", () => {
  it("should return the initial state when given by unknown action", () => {
    // arrange
    const initialState = [];
    const action = { type: "UNKNOWN" };
    // action
    const nextState = leaderboardsReducer(initialState, action);
    // assert
    expect(nextState).toEqual(initialState);
  });

  it("should return the leaderboards when given by RECEIVE_LEADERBOARDS action", () => {
    // arrange
    const initialState = [];
    const action = {
      type: ActionType.RECEIVE_LEADERBOARDS,
      payload: {
        leaderboards: [
          {
            user: {
              id: "users-1",
              name: "John Doe",
              email: "john@example.com",
              avatar: "https://generated-image-url.jpg",
            },
            score: 10,
          },
          {
            user: {
              id: "users-2",
              name: "Jane Doe",
              email: "jane@example.com",
              avatar: "https://generated-image-url.jpg",
            },
            score: 5,
          },
        ],
      },
    };

    // action
    const nextState = leaderboardsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.leaderboards);
  });

  it("should return null when given by CLEAR_LEADERBOARDS action", () => {
    // arrange
    const initialState = [
      {
        user: {
          id: "users-1",
          name: "John Doe",
          email: "john@example.com",
          avatar: "https://generated-image-url.jpg",
        },
        score: 10,
      },
      {
        user: {
          id: "users-2",
          name: "Jane Doe",
          email: "jane@example.com",
          avatar: "https://generated-image-url.jpg",
        },
        score: 5,
      },
    ];
    const action = {
      type: ActionType.CLEAR_LEADERBOARDS,
    };

    // action
    const nextState = leaderboardsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([]);
  });
});
