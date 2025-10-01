import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Notifications from "./Notifications";

const sample = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: "<strong>Urgent requirement</strong> - complete by EOD" } },
];

describe("Notifications", () => {
  test("affiche 3 items avec le bon texte", () => {
    render(<Notifications notifications={sample} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(3);

    expect(screen.getByText(/new course available/i)).toBeInTheDocument();
    expect(screen.getByText(/new resume available/i)).toBeInTheDocument();
    // L'item HTML
    expect(
      screen.getByText(/Urgent requirement/i).closest("li")
    ).toHaveAttribute("data-notification-type", "urgent");
  });
});
