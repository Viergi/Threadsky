import api from "../../utils/api";

const ActionType = {
  RECEIVE_USERS: "RECEIVE_USERS",
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

function asyncRegisterUser({ email, name, password }) {
  return async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      await api.register({ email, name, password });
    } catch (error) {
      throw error;
    }
  };
}

export { ActionType, receiveUsersActionCreator, asyncRegisterUser };
