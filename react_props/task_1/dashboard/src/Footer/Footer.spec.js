import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../Footer";

describe("Footer component", () => {
  test("rend Copyright {année} - Holberton School quand isIndex=true", () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    const re = new RegExp(`Copyright\\s+${year}\\s+-\\s+Holberton School`, "i");
    expect(screen.getByText(re)).toBeInTheDocument();
  });
});
