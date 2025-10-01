import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("App shell", () => {
  test("rend Header, Login et Footer", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1, name: /school dashboard/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByText(/copyright/i)).toBeInTheDocument();
  });
});
