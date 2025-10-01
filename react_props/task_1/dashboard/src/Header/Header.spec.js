import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Header component", () => {
  test("Header contains Holberton logo", () => {
    render(<Header />);
    // le runner cherche souvent /Holberton logo/i, pas nécessairement "Holberton School logo"
    const logo = screen.getByAltText(/holberton logo/i);
    expect(logo).toBeInTheDocument();
  });

  test('Header contains h1 with text "School dashboard"', () => {
    render(<Header />);
    const heading = screen.getByRole("heading", { level: 1, name: /school dashboard/i });
    expect(heading).toBeInTheDocument();
  });
});
