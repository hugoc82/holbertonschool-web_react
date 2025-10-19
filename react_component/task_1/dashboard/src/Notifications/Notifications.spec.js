import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Notifications from "./Notifications";

describe("Notifications - markAsRead", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore(); // requirement: restore mocked console
  });

  test("clicking on first notification logs 'Notification 1 has been marked as read'", () => {
    render(<Notifications displayDrawer={true} />); // utilise la liste par défaut
    const firstItem = screen.getAllByRole("listitem")[0];
    fireEvent.click(firstItem);
    expect(consoleSpy).toHaveBeenCalledWith(
      "Notification 1 has been marked as read"
    );
  });

  test("clicking on second notification logs 'Notification 2 has been marked as read'", () => {
    render(<Notifications displayDrawer={true} />);
    const items = screen.getAllByRole("listitem");
    fireEvent.click(items[1]);
    expect(consoleSpy).toHaveBeenCalledWith(
      "Notification 2 has been marked as read"
    );
  });
});
