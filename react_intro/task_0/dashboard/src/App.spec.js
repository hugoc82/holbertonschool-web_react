import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders heading with text 'School dashboard'", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { level: 1, name: /School dashboard/i })
  ).toBeInTheDocument();
});

test("renders correct text in body and footer", () => {
  render(<App />);
  expect(
    screen.getByText(/Login to access the full dashboard/i)
  ).toBeInTheDocument();

  const currentYear = new Date().getFullYear();
  expect(
    screen.getByText(
      new RegExp(`Copyright ${currentYear} - holberton School`, "i")
    )
  ).toBeInTheDocument();
});

test("renders the Holberton logo", () => {
  render(<App />);
  expect(screen.getByAltText(/holberton logo/i)).toBeInTheDocument();
});
