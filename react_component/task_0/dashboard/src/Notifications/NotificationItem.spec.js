import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Notifications from "./Notifications";

const sample = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: "<strong>Urgent requirement</strong> - complete by EOD" } },
];

describe("Notifications (Task 5)", () => {
  test("always shows the title 'Your notifications'", () => {
    render(<Notifications displayDrawer={false} notifications={sample} />);
    expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
  });

  test("displayDrawer=false -> hides close button, 'Here is the list…', and items", () => {
    render(<Notifications displayDrawer={false} notifications={sample} />);
    expect(screen.queryByRole("button", { name: /close/i })).not.toBeInTheDocument();
    expect(screen.queryByText(/here is the list of notifications/i)).not.toBeInTheDocument();
    expect(screen.queryAllByRole("listitem").length).toBe(0);
  });

  test("displayDrawer=true + has items -> shows close button, 'Here is the list…', and items", () => {
    render(<Notifications displayDrawer={true} notifications={sample} />);
    expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument();
    expect(screen.getByText(/here is the list of notifications/i)).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
    expect(screen.getByText(/new course available/i)).toBeInTheDocument();
    expect(screen.getByText(/new resume available/i)).toBeInTheDocument();
    expect(screen.getByText(/urgent requirement/i)).toBeInTheDocument();
  });

  test("displayDrawer=true + empty notifications -> shows 'No new notification for now'", () => {
    render(<Notifications displayDrawer={true} notifications={[]} />);
    expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument();
    expect(screen.getByText(/no new notification for now/i)).toBeInTheDocument();
    expect(screen.queryByText(/here is the list of notifications/i)).not.toBeInTheDocument();
    expect(screen.queryAllByRole("listitem").length).toBe(0);
  });
});