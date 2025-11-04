import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import AppContext from "../AppContext";

describe("Header Component", () => {
  it("renders the header with the user logged in", () => {
    const contextValue = {
      user: { email: "john@example.com", isLoggedIn: true },
      logOut: jest.fn(),
    };
    render(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    );
    expect(screen.getByText(/Welcome john@example.com/)).toBeInTheDocument();
  });

  it("logs out the user when the logout link is clicked", () => {
    const logOutMock = jest.fn();
    const contextValue = {
      user: { email: "john@example.com", isLoggedIn: true },
      logOut: logOutMock,
    };
    render(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    );
    fireEvent.click(screen.getByText(/Logout/i));
    expect(logOutMock).toHaveBeenCalled();
  });
});
