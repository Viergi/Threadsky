import React from "react";
import { Provider } from "react-redux";
import Category from "../components/Category";
import { configureStore, createSlice } from "@reduxjs/toolkit";

export default {
  component: Category,
  title: "Category",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    category: "general",
  },
};

export const Selected = {
  args: {
    category: "general",
  },
  decorators: [
    (story) => (
      <Provider
        store={configureStore({
          reducer: createSlice({
            name: "selectedCategory",
            initialState: { selectedCategory: "general" },
          }).reducer,
        })}
      >
        {story()}
      </Provider>
    ),
  ],
};
