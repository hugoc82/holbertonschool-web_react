import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Login from "../Login";

describe("Login component", () => {
  test("contient 2 labels, 2 inputs et 1 bouton", () => {
    const { container } = render(<Login />);
    expect(container.querySelectorAll("label").length).toBe(2);
    expect(container.querySelectorAll("input").length).toBe(2);
    expect(screen.getAllByRole("button").length).toBe(1);
  });

  test("clic sur label -> focus sur l'input associé (Email)", async () => {
    render(<Login />);
    const user = userEvent.setup();
    const emailInput = screen.getByLabelText(/email/i);
    const emailLabel = screen.getByText(/email/i).closest("label");
    expect(emailInput).not.toHaveFocus();
    await user.click(emailLabel);
    expect(emailInput).toHaveFocus();
  });
});
