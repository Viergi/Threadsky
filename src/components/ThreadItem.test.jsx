import React from "react";
import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
import ThreadItem from "./ThreadItem";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../states";

/**
 * skenario testing
 *
 * - ThreadItem component
 *   - should display data correctly
 */

expect.extend(matchers);
const mockUser = {
  id: "john_doe",
  name: "John Doe",
  email: "john@example.com",
  avatar: "https://generated-image-url.jpg/",
};

const mockData = {
  id: "thread-1",
  title: "Thread Pertama",
  body: "Ini adalah thread pertama",
  category: "General",
  createdAt: "2021-06-21T07:00:00.000Z",
  ownerId: "users-1",
  upVotesBy: [],
  downVotesBy: [],
  totalComments: 0,
  user: mockUser,
};

describe("Register component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should display data correctly", async () => {
    // Arrange
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ThreadItem {...mockData} user={mockData.user} />
        </BrowserRouter>
      </Provider>
    );
    const name = await screen.getByTestId("name").textContent;
    const email = await screen.getByTestId("email").textContent;
    const img = await screen.getByTestId("img").src;
    const title = screen.getByTestId("title").textContent;
    const body = screen.getByTestId("body").textContent;
    const category = screen.getByTestId("category").textContent;
    // Assert
    expect(img).toEqual(mockData.user.avatar);
    expect(name).toEqual(mockData.user.name);
    expect(email).toEqual(mockData.user.email);
    expect(title).toEqual(mockData.title);
    expect(body).toEqual(mockData.body);
    expect(category).toEqual(`#${mockData.category}`);
  });
});
