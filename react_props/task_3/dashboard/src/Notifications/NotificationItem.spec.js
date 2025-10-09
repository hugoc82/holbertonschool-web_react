import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NotificationItem from "./NotificationItem";

describe("NotificationItem", () => {
  test('default type -> blue + data-notification-type="default"', () => {
    render(<NotificationItem type="default" value="Default text" />);
    const li = screen.getByText("Default text");

    // 1) l'élément existe
    expect(li).toBeInTheDocument();

    // 2) bon attribut
    expect(li).toHaveAttribute("data-notification-type", "default");

    // 3) couleur calculée
    expect(getComputedStyle(li).color).toBe("rgb(0, 0, 255)");
  });

  test('urgent type -> red + data-notification-type="urgent"', () => {
    render(<NotificationItem type="urgent" value="Urgent text" />);
    const li = screen.getByText("Urgent text");

    expect(li).toBeInTheDocument();
    expect(li).toHaveAttribute("data-notification-type", "urgent");
    expect(getComputedStyle(li).color).toBe("rgb(255, 0, 0)");
  });
});
