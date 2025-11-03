import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App.jsx";

describe("App (Task 4) — advanced state notifications", () => {
  test("clicking a notification item removes it and logs the expected string", () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    render(<App />);

    // Ouvre le drawer
    fireEvent.click(screen.getByText(/your notifications/i));

    // On clique sur l'item ayant "New resume available" (id:2 dans l’état initial)
    const item = screen.getByText("New resume available");
    fireEvent.click(item);

    // L’item disparaît
    expect(screen.queryByText("New resume available")).toBeNull();

    // Log correct
    expect(logSpy).toHaveBeenCalledWith(
      "Notification 2 has been marked as read"
    );

    logSpy.mockRestore();
  });
});
