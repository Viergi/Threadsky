import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import api from "../../utils/api";
import { asyncSetAuthUser, setAuthUserActionCreator } from "./action";
import { hideLoading, showLoading } from "react-redux-loading-bar";

/**
 * skenario test
 *
 * - asyncSetUserAuth thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 *
 */

const fakeLoginResponse = {
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRpbWFzMiIsIm5hbWUiOiJEaW1hcyBTYXB1dHJhIiwicGhvdG8iOiJodHRwczovL3VpLWF2YXRhcnMuY29tL2FwaS8_bmFtZT1EaW1hcyBTYXB1dHJhJmJhY2tncm91bmQ9cmFuZG9tIiwiaXNfcGVybWFuZW50IjpmYWxzZSwiaWF0IjoxNjYzODQwNzY0fQ._HrzpinFYX_m9WfvM-lGCdVrnhnaGHhzt1e6eATE1Iw",
};

const fakeGetOwnProfileResponse = {
  id: "john_doe",
  name: "John Doe",
  email: "john@example.com",
  avatar: "https://generated-image-url.jpg",
};

const fakeErrorResponse = new Error("Ups, Something went wrong");

describe("asyncSetUserAuth thunk", () => {
  beforeEach(() => {
    api._login = api.login;
    api._getOwnProfile = api.getOwnProfile;
  });

  afterEach(() => {
    api.login = api._login;
    api.getOwnProfile = api._getOwnProfile;
    // delete backup data
    delete api._login;
    delete api._getOwnProfile;
  });

  it("should dispatch action correctly when data fetching success", async () => {
    //arrange
    api.login = () => Promise.resolve(fakeLoginResponse);
    api.getOwnProfile = () => Promise.resolve(fakeGetOwnProfileResponse);
    const email = "johndoe@gmail.com";
    const password = "johndoe123";

    const dispatch = vi.fn();

    await asyncSetAuthUser({ email, password })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      setAuthUserActionCreator(fakeGetOwnProfileResponse)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it("should dispatch action and call alert correctly when data fetching failed", async () => {
    //arrange
    api.login = () => Promise.reject(fakeErrorResponse);
    const email = "johndoe@gmail.com";
    const password = "johndoe123";

    const dispatch = vi.fn();
    window.alert = vi.fn();

    await asyncSetAuthUser({ email, password })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
