import { ActionType } from "./action";

function selectedCategoryReducer(selectedCategory = null, action = {}) {
  switch (action.type) {
    case ActionType.SELECT_CATEGORY:
      return action.payload.category;
    case ActionType.CLEAR_CATEGORY:
      return null;
    default:
      return selectedCategory;
  }
}

export default selectedCategoryReducer;
