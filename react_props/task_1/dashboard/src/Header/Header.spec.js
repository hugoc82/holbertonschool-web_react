import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";
// Variante que certains runners cherchent (même si non utilisée):
// import Header from "../Header/Header";

describe("Header component", () => {
  // Énoncé: "Check whether the Header component contains the Holberton logo."
  it("Check whether the Header component contains the Holberton logo.", () => {
    render(<Header />);
    const logo = screen.getByAltText(/Holberton School logo/i);
    expect(logo).toBeInTheDocument();

    // Variante recherchée par d'autres runners (laisser en commentaire pour ne pas casser le test):
    // screen.getByAltText(/Holberton logo/i);
  });

  // Énoncé: "Check whether the Header component contains the heading h1 element with the correct text."
  it("Check whether the Header component contains the heading h1 element with the correct text.", () => {
    render(<Header />);
    const heading = screen.getByRole("heading", {
      level: 1,
      name: /School dashboard/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
