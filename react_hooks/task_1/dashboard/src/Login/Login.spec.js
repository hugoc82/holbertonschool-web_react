import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login.jsx";

describe("Login (Task 2) — calls logIn with email & password", () => {
  test("submit is disabled by default", () => {
    render(<Login />);
    const submit = screen.getByRole("button", { name: /ok/i });
    expect(submit).toBeDisabled();
  });

  test("submit enables only when email valid and password ≥ 8", () => {
    render(<Login />);
    const email = screen.getByLabelText(/email/i);
    const password = screen.getByLabelText(/password/i);
    const submit = screen.getByRole("button", { name: /ok/i });

    fireEvent.change(email, { target: { value: "john@doe.com" } });
    fireEvent.change(password, { target: { value: "short" } });
    expect(submit).toBeDisabled();

    fireEvent.change(password, { target: { value: "longenough" } });
    expect(submit).toBeEnabled();
  });

  test("on submit, calls props.logIn(email, password)", () => {
    const logIn = jest.fn();
    render(<Login logIn={logIn} />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "jane@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "superstrong" },
    });

    fireEvent.click(screen.getByRole("button", { name: /ok/i }));
    expect(logIn).toHaveBeenCalledWith("jane@example.com", "superstrong");
  });
});
