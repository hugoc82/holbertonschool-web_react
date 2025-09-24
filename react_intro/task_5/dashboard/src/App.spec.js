/* eslint-env jest */
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders header title", () => {
    render(<App />);
    expect(screen.getByText(/School dashboard/i)).toBeInTheDocument();
  });

  test("renders sign-in form controls", () => {
    render(<App />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /ok/i })).toBeInTheDocument();
  });
});
