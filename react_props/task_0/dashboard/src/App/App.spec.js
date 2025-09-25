import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App shell", () => {
  it("rend le Header", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: /school dashboard/i })).toBeInTheDocument();
  });

  it("rend le Login", () => {
    render(<App />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  it("rend le Footer", () => {
    render(<App />);
    expect(screen.getByText(/copyright/i)).toBeInTheDocument();
  });
});
