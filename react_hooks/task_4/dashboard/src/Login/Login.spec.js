import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";

describe("Login Component", () => {
  it("tests email and password input validation", () => {
    const onLoginMock = jest.fn();
    render(<Login onLogin={onLoginMock} />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByText(/OK/i);

    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "12345678" } });

    fireEvent.click(submitButton);
    expect(onLoginMock).toHaveBeenCalledWith("john@example.com", "12345678");
  });

  it("disables the submit button when inputs are invalid", () => {
    const onLoginMock = jest.fn();
    render(<Login onLogin={onLoginMock} />);
    const submitButton = screen.getByText(/OK/i);
    expect(submitButton).toBeDisabled();
  });
});
