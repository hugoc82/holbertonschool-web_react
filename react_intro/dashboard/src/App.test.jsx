import React from "react"; // ✅ nécessaire pour Jest avec JSX
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders School dashboard heading", () => {
  render(<App />);
  expect(screen.getByText(/School dashboard/i)).toBeInTheDocument();
});

test("renders footer with current year", () => {
  render(<App />);
  const currentYear = new Date().getFullYear();
  expect(
    screen.getByText(new RegExp(`Copyright ${currentYear} - holberton School`, "i"))
  ).toBeInTheDocument();
});
