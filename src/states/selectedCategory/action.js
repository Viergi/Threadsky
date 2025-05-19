const ActionType = {
  SELECT_CATEGORY: "SELECT_CATEGORY",
  CLEAR_CATEGORY: "CLEAR_CATEGORY",
};

function selectCategoryActionCreator(category) {
  return {
    type: ActionType.SELECT_CATEGORY,
    payload: {
      category,
    },
  };
}

function clearSelectedCategoryActionCreator() {
  return {
    type: ActionType.CLEAR_CATEGORY,
  };
}

export {
  ActionType,
  selectCategoryActionCreator,
  clearSelectedCategoryActionCreator,
};
