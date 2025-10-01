import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App/App";

describe("App login switch", () => {
  test("when isLoggedIn = false -> renders Login", () => {
    render(<App isLoggedIn={false} />);
    expect(screen.getByText(/login to access the full dashboard/i)).toBeInTheDocument();
  });

  test("when isLoggedIn = true -> renders CourseList", () => {
    render(<App isLoggedIn={true} />);
    expect(screen.getByRole("table", { name: "" })).toBeInTheDocument(); // table#CourseList exists
    expect(screen.getByText(/available courses/i)).toBeInTheDocument();
  });
});
