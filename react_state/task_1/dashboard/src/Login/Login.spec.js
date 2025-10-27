import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login.jsx";

describe("Login (Task 1) — controlled inputs & submit enable", () => {
  test("submit is disabled by default", () => {
    render(<Login />);
    const submit = screen.getByRole("button", { name: /ok/i });
    expect(submit).toBeDisabled();
  });

  test("submit enables only when email is valid and password has ≥ 8 chars", () => {
    render(<Login />);
    const email = screen.getByLabelText(/email/i);
    const password = screen.getByLabelText(/password/i);
    const submit = screen.getByRole("button", { name: /ok/i });

    // Cas 1 : email invalide + mdp court → disabled
    fireEvent.change(email, { target: { value: "not-an-email" } });
    fireEvent.change(password, { target: { value: "short" } });
    expect(submit).toBeDisabled();

    // Cas 2 : email valide, mdp court → disabled
    fireEvent.change(email, { target: { value: "john@doe.com" } });
    fireEvent.change(password, { target: { value: "short7" } });
    expect(submit).toBeDisabled();

    // Cas 3 : email invalide, mdp ≥ 8 → disabled
    fireEvent.change(email, { target: { value: "john@doe" } }); // pas de TLD
    fireEvent.change(password, { target: { value: "longenough" } });
    expect(submit).toBeDisabled();

    // Cas 4 : email valide + mdp ≥ 8 → enabled
    fireEvent.change(email, { target: { value: "jane.doe@example.com" } });
    fireEvent.change(password, { target: { value: "superstrong" } });
    expect(submit).toBeEnabled();
  });
});
