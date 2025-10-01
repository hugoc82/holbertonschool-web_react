import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Header component", () => {
  test("Check whether the Header component contains the Holberton logo.", () => {
    render(<Header />);
    const logo = screen.getByAltText(/Holberton School logo/i);
    expect(logo).toBeInTheDocument();
  });

  test("Check whether the Header component contains the heading h1 element with the correct text.", () => {
    render(<Header />);
    const heading = screen.getByRole("heading", { level: 1, name: /School dashboard/i });
    expect(heading).toBeInTheDocument();
  });
});
