import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer.jsx";
import AppContext from "../Context/context.js";

describe("Footer (Task 4) — Context consumer", () => {
  test('does NOT show "Contact us" when logged out', () => {
    const value = {
      user: { email: "", password: "", isLoggedIn: false },
      logOut: jest.fn(),
    };
    render(
      <AppContext.Provider value={value}>
        <Footer />
      </AppContext.Provider>
    );
    expect(screen.queryByText(/contact us/i)).toBeNull();
  });

  test('shows "Contact us" when logged in', () => {
    const value = {
      user: { email: "a@b.com", password: "x", isLoggedIn: true },
      logOut: jest.fn(),
    };
    render(
      <AppContext.Provider value={value}>
        <Footer />
      </AppContext.Provider>
    );
    expect(screen.getByText(/contact us/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /contact us/i })).toHaveAttribute(
      "href",
      "#contact"
    );
  });
});
