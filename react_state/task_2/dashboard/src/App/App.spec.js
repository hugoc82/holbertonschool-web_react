import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App.jsx";

describe("App (Task 2) — Context login flow", () => {
  test("logging in renders CourseList and unmounts Login", () => {
    render(<App />);

    // Le formulaire doit être visible au départ
    const email = screen.getByLabelText(/email/i);
    const password = screen.getByLabelText(/password/i);
    const submit = screen.getByRole("button", { name: /ok/i });

    // Remplir avec valeurs valides
    fireEvent.change(email, { target: { value: "john@doe.com" } });
    fireEvent.change(password, { target: { value: "longenough" } });

    // Soumettre
    fireEvent.click(submit);

    // Le CourseList apparait (par exemple, l'en-tête de table)
    expect(screen.getByText(/available courses/i)).toBeInTheDocument();

    // Les labels du Login ne doivent plus être présents
    expect(screen.queryByLabelText(/email/i)).toBeNull();
    expect(screen.queryByLabelText(/password/i)).toBeNull();
  });
});
