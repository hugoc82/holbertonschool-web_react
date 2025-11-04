import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NotificationItem from "./NotificationItem";

describe("NotificationItem Component", () => {
  it("tests notification item click", () => {
    const markAsReadMock = jest.fn();
    render(
      <NotificationItem
        id={1}
        type="default"
        value="New message"
        markAsRead={markAsReadMock}
      />
    );
    fireEvent.click(screen.getByText("New message"));
    expect(markAsReadMock).toHaveBeenCalledWith(1);
  });
});
