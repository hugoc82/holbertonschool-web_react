import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Notifications from "./Notifications.jsx";

describe("Notifications (Task 4) — PureComponent + markNotificationAsRead prop", () => {
  test("when closed: shows the menu item and calls handleDisplayDrawer on click", () => {
    const onOpen = jest.fn();
    render(
      <Notifications
        displayDrawer={false}
        handleDisplayDrawer={onOpen}
        notifications={[{ id: 1, type: "default", value: "A" }]}
      />
    );
    fireEvent.click(screen.getByText(/your notifications/i));
    expect(onOpen).toHaveBeenCalled();
  });

  test("when open with items: clicking an item calls markNotificationAsRead with id", () => {
    const onMark = jest.fn();
    const items = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
    ];
    render(
      <Notifications
        displayDrawer
        notifications={items}
        markNotificationAsRead={onMark}
      />
    );

    fireEvent.click(screen.getByText("New resume available"));
    expect(onMark).toHaveBeenCalledWith(2);
  });

  test('when open and empty: shows "No new notification for now" and hides Close button', () => {
    render(<Notifications displayDrawer notifications={[]} />);
    expect(
      screen.getByText(/no new notification for now/i)
    ).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /close/i })).toBeNull();
  });
});
