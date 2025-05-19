import { ActionsType } from "./action";

function authUserReducer(authUser = null, action = {}) {
  switch (action.type) {
    case ActionsType.SET_AUTH_USER:
      return action.payload.authUser;
    case ActionsType.UNSET_AUTH_USER:
      return null;
    default:
      return authUser;
  }
}

export default authUserReducer;
