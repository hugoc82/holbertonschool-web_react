import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App component (task_3)", () => {
  test("renders notifications text (smoke check from previous tasks)", () => {
    render(<App />);
    expect(
      screen.getByText(/here is the list of notifications/i)
    ).toBeInTheDocument();
  });

  test("renders Header h1 and default Login when not logged in", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { level: 1, name: /school dashboard/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/login to access the full dashboard/i)).toBeInTheDocument();
  });

  test("renders CourseList when logged in (wrapped in BodySectionWithMarginBottom)", () => {
    render(<App isLoggedIn={true} />);
    // titre du wrapper
    expect(
      screen.getByRole("heading", { level: 2, name: /course list/i })
    ).toBeInTheDocument();
  });

  // ----- Test requis par l'énoncé -----
  test('shows "News from the School" block with paragraph', () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { level: 2, name: /news from the school/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/holberton school news goes here/i)
    ).toBeInTheDocument();
  });
});
