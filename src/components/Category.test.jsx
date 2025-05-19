import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { afterEach, describe, expect, it } from "vitest";
import Category from "./Category";
import matchers from "@testing-library/jest-dom/matchers";
import store from "../states";

/**
 * skenario testing
 *
 * - ThreadItem component
 *   - should display data correctly
 */

expect.extend(matchers);

describe("Category component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should display data correctly", async () => {
    // Arrange
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Category category={"general"} />
        </BrowserRouter>
      </Provider>
    );
    const category = screen.getByTestId("category").textContent;
    // Assert

    expect(category).toEqual(`# general`);
  });
});
