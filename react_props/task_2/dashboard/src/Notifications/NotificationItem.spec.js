import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NotificationItem from "./NotificationItem";

describe("NotificationItem", () => {
  test('default -> bleu + data-notification-type="default"', () => {
    render(<NotificationItem type="default" value="New course available" />);
    const li = screen.getByText(/new course available/i);
    expect(li).toHaveAttribute("data-notification-type", "default");
    expect(li).toHaveStyle({ color: "blue" });
  });

  test('urgent -> rouge + data-notification-type="urgent"', () => {
    render(<NotificationItem type="urgent" value="New resume available" />);
    const li = screen.getByText(/new resume available/i);
    expect(li).toHaveAttribute("data-notification-type", "urgent");
    expect(li).toHaveStyle({ color: "red" });
  });
});
