import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearSelectedCategoryActionCreator,
  selectCategoryActionCreator,
} from "../states/selectedCategory/action";

export default function Category({ category }) {
  const selectedCategory = useSelector((states) => states.selectedCategory);
  const dispatch = useDispatch();

  const handleCategoryClick = () => {
    if (category == selectedCategory) {
      return dispatch(clearSelectedCategoryActionCreator());
    }
    dispatch(selectCategoryActionCreator(category));
  };

  return (
    <button
      className={`shadow rounded-md px-2 py-0.5 ${
        category == selectedCategory && "bg-secondary text-text-accent"
      }`}
      onClick={handleCategoryClick}
    >
      <p data-testid="category"># {category}</p>
    </button>
  );
}
