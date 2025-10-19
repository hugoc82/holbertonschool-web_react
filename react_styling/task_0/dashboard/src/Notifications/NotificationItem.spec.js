// src/Notifications/NotificationItem.spec.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import NotificationItem from "./NotificationItem";

describe("NotificationItem - click handler", () => {
  test("calls markAsRead with its id when clicked", () => {
    const spy = jest.fn();

    render(
      <ul>
        <NotificationItem
          id={42}
          type="default"
          value="Hello"
          markAsRead={spy}
        />
      </ul>
    );

    const li = screen.getByRole("listitem");
    fireEvent.click(li);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(42);
  });
});
