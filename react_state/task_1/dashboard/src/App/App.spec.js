import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App.jsx";

describe("App local state for notifications", () => {
  test("displayDrawer is false by default", () => {
    render(<App />);
    // Drawer fermé => on doit voir le menu "Your notifications"
    expect(screen.getByText(/Your notifications/i)).toBeInTheDocument();
    // Et pas le bouton close (drawer non monté)
    expect(screen.queryByTestId("close-btn")).toBeNull();
  });

  test('clicking on "Your notifications" opens the drawer', () => {
    render(<App />);
    fireEvent.click(screen.getByText(/Your notifications/i));
    // Le bouton close apparaît => drawer ouvert
    expect(screen.getByTestId("close-btn")).toBeInTheDocument();
  });

  test("clicking the close button hides the drawer", () => {
    render(<App />);
    fireEvent.click(screen.getByText(/Your notifications/i)); // open
    const closeBtn = screen.getByTestId("close-btn");
    fireEvent.click(closeBtn); // close
    // on revient à l’état fermé => menu visible
    expect(screen.getByText(/Your notifications/i)).toBeInTheDocument();
    expect(screen.queryByTestId("close-btn")).toBeNull();
  });
});
