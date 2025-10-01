import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";

describe("Header component", () => {
  test("contient le logo Holberton", () => {
    render(<Header />);
    const logo = screen.getByAltText(/holberton school logo/i);
    expect(logo).toBeInTheDocument();
  });

  test("contient un h1 avec le bon texte", () => {
    render(<Header />);
    const h1 = screen.getByRole("heading", { level: 1, name: /school dashboard/i });
    expect(h1).toBeInTheDocument();
  });
});
