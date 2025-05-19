import React from "react";
import "../src/index.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../src/states";

/** @type { import('@storybook/react').Preview } */
export const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <BrowserRouter>
      <Provider store={store}>
        <Story />
      </Provider>
    </BrowserRouter>
  ),
];
