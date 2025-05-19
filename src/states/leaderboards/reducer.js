import { ActionType } from "./action";

function leaderboardsReducer(leaderboards = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_LEADERBOARDS:
      return action.payload.leaderboards;
    case ActionType.CLEAR_LEADERBOARDS:
      return [];
    default:
      return leaderboards;
  }
}

export default leaderboardsReducer;
