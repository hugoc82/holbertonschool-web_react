/* eslint-env jest */
import React from "react";
import { render, screen, within, fireEvent } from "@testing-library/react";
import Notifications from "./Notifications";

describe("Notifications", () => {
  test("has title", () => {
    render(<Notifications />);
    expect(
      screen.getByText(/here is the list of notifications/i)
    ).toBeInTheDocument();
  });

  test("has 3 list items", () => {
    render(<Notifications />);
    const list = screen.getByRole("list");
    expect(within(list).getAllByRole("listitem")).toHaveLength(3);
  });

  test("has a Close button and logs on click", () => {
    const spy = jest.spyOn(console, "log").mockImplementation(() => {});
    render(<Notifications />);
    fireEvent.click(screen.getByRole("button", { name: /close/i }));
    expect(spy).toHaveBeenCalledWith("Close button has been clicked");
    spy.mockRestore();
  });
});
