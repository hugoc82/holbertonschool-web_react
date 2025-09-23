/* eslint-env jest */
import React from "react";
import { render, screen, within, fireEvent } from "@testing-library/react";
import Notifications from "./Notifications";

describe("Notifications component", () => {
  test("affiche le titre des notifications", () => {
    render(<Notifications />);
    expect(
      screen.getByText(/Here is the list of notifications/i)
    ).toBeInTheDocument();
  });

  test("contient un bouton Close", () => {
    render(<Notifications />);
    expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument();
  });

  test("rend exactement 3 éléments de liste (li)", () => {
    render(<Notifications />);
    const list = screen.getByRole("list"); // <ul>
    const items = within(list).getAllByRole("listitem"); // <li>
    expect(items).toHaveLength(3);
  });

  test("le clic sur le bouton Close log 'Close button has been clicked'", () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    render(<Notifications />);
    fireEvent.click(screen.getByRole("button", { name: /close/i }));
    expect(logSpy).toHaveBeenCalledWith("Close button has been clicked");
    logSpy.mockRestore();
  });
});
