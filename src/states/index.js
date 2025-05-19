import { configureStore } from "@reduxjs/toolkit";
import threadsReducer from "./threads/reducer";
import authUserReducer from "./authUser/reducer";
import isPreloadReducer from "./isPreload/reducer";
import threadDetailReducer from "./threadDetail/reducer";
import leaderboardsReducer from "./leaderboards/reducer";
import { usersReducer } from "./users/reducer";
import selectedCategoryReducer from "./selectedCategory/reducer";
import { loadingBarReducer } from "react-redux-loading-bar";

const store = configureStore({
  reducer: {
    threads: threadsReducer,
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    threadDetail: threadDetailReducer,
    leaderboards: leaderboardsReducer,
    users: usersReducer,
    selectedCategory: selectedCategoryReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
