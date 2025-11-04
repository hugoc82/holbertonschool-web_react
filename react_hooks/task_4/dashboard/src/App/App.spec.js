import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { AppContext } from "./AppContext";

describe("App Component", () => {
  test("displays login form when user is not logged in", () => {
    render(<App />);
    expect(
      screen.getByText(/Login to access the full dashboard/i)
    ).toBeInTheDocument();
  });

  test("logs in a user", () => {
    render(<App />);
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "john@doe.com" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByRole("button", { name: /ok/i }));

    expect(screen.getByText(/Welcome john@doe.com/i)).toBeInTheDocument();
    expect(
      screen.queryByText(/Login to access the full dashboard/i)
    ).not.toBeInTheDocument();
  });

  test("logs out a user", () => {
    render(<App />);
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "john@doe.com" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByRole("button", { name: /ok/i }));

    fireEvent.click(screen.getByText(/logout/i));

    expect(
      screen.getByText(/Login to access the full dashboard/i)
    ).toBeInTheDocument();
  });

  test("handles notification drawer visibility", () => {
    render(<App />);
    fireEvent.click(screen.getByText(/Your notifications/i));
    expect(
      screen.getByText(/Here is the list of notifications/i)
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /close/i }));
    expect(screen.queryByText(/Here is the list of notifications/i)).toBeNull();
  });
});
