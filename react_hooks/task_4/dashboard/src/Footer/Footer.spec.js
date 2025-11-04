import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component", () => {
  it("renders the footer", () => {
    render(<Footer />);
    expect(
      screen.getByText(/Copyright 2025 - Holberton School/)
    ).toBeInTheDocument();
  });
});
