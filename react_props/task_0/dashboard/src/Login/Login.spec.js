import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Login", () => {
  it("affiche les champs email et password", () => {
    render(<Login />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });
});
