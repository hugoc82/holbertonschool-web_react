import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App.jsx";

describe("App (Task 3) — login/logout flow with Context-backed state", () => {
  test("login shows CourseList and hides Login", () => {
    render(<App />);

    const email = screen.getByLabelText(/email/i);
    const password = screen.getByLabelText(/password/i);
    const submit = screen.getByRole("button", { name: /ok/i });

    // inactive by default
    expect(submit).toBeDisabled();

    fireEvent.change(email, { target: { value: "john@doe.com" } });
    fireEvent.change(password, { target: { value: "longenough" } });
    expect(submit).toBeEnabled();

    fireEvent.click(submit);

    // CourseList visible
    expect(screen.getByText(/available courses/i)).toBeInTheDocument();
    // Login disparu
    expect(screen.queryByLabelText(/email/i)).toBeNull();
    expect(screen.queryByLabelText(/password/i)).toBeNull();
  });

  test("logout from Header shows Login again and hides CourseList", () => {
    render(<App />);

    // login first
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "john@doe.com" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "longenough" },
    });
    fireEvent.click(screen.getByRole("button", { name: /ok/i }));

    // ensure logged in
    expect(screen.getByText(/available courses/i)).toBeInTheDocument();
    // logout
    fireEvent.click(screen.getByText(/logout/i));

    // back to login form
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    // and course list hidden
    expect(screen.queryByText(/available courses/i)).toBeNull();
  });
});
