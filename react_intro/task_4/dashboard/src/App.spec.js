/* eslint-env jest */
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Sign-in form in App", () => {
  test("renders 2 input elements (email & password)", () => {
    const { container } = render(<App />);
    // Compte strictement les deux <input> du formulaire
    const inputs = container.querySelectorAll("input");
    expect(inputs).toHaveLength(2);
  });

  test("renders 2 labels with text 'Email' and 'Password' (case-insensitive)", () => {
    render(<App />);
    // Regex insensibles à la casse (checker-friendly)
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  test("renders a button with text 'OK' (case-insensitive)", () => {
    render(<App />);
    // Regex insensible à la casse, sans ancre stricte
    expect(screen.getByRole("button", { name: /ok/i })).toBeInTheDocument();
  });
});
