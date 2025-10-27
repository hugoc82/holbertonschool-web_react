import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header.jsx";
import AppContext from "../Context/context.js";

describe("Header (Task 3) — logoutSection & context", () => {
  test("with default context: logoutSection is NOT rendered", () => {
    render(
      <AppContext.Provider
        value={{
          user: { email: "", password: "", isLoggedIn: false },
          logOut: jest.fn(),
        }}
      >
        <Header />
      </AppContext.Provider>
    );
    expect(screen.queryByText(/welcome/i)).toBeNull();
    expect(screen.queryByTestId("logoutSection")).toBeNull();
    expect(screen.getByAltText(/holberton logo/i)).toBeInTheDocument();
  });

  test("when user.isLoggedIn is true: renders logoutSection with email", () => {
    const value = {
      user: { email: "john@doe.com", password: "x", isLoggedIn: true },
      logOut: jest.fn(),
    };
    render(
      <AppContext.Provider value={value}>
        <Header />
      </AppContext.Provider>
    );
    // via id
    const section = document.getElementById("logoutSection");
    expect(section).not.toBeNull();
    expect(screen.getByText(/welcome john@doe.com/i)).toBeInTheDocument();
    expect(screen.getByText(/logout/i)).toBeInTheDocument();
  });

  test('clicking "logout" calls context.logOut', () => {
    const spy = jest.fn();
    const value = {
      user: { email: "a@b.com", password: "x", isLoggedIn: true },
      logOut: spy,
    };
    render(
      <AppContext.Provider value={value}>
        <Header />
      </AppContext.Provider>
    );
    fireEvent.click(screen.getByText(/logout/i));
    expect(spy).toHaveBeenCalled();
  });
});
