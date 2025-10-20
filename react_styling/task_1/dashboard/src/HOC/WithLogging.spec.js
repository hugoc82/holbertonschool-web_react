import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import WithLogging from "./WithLogging";

class MockApp extends React.Component {
  render () {
    return (<h1>Hello from Mock App Component</h1>);
  }
}

describe("WithLogging HOC", () => {
  let logSpy;

  afterEach(() => {
    cleanup();
    if (logSpy) logSpy.mockRestore();
  });

  test("renders heading from wrapped component", () => {
    const LoggedMock = WithLogging(MockApp);
    render(<LoggedMock />);
    expect(
      screen.getByRole("heading", { level: 1, name: /hello from mock app component/i })
    ).toBeInTheDocument();
  });

  test("logs on mount and unmount, and sets displayName", () => {
    const LoggedMock = WithLogging(MockApp);
    expect(LoggedMock.displayName).toBe("WithLogging(MockApp)");

    logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    const { unmount } = render(<LoggedMock />);
    expect(logSpy).toHaveBeenCalledWith("Component MockApp is mounted");

    unmount();
    expect(logSpy).toHaveBeenCalledWith("Component MockApp is going to unmount");
  });

  test("defaults to name 'Component' if wrapped is anonymous", () => {
    const Anonymous = () => <h1>Hi</h1>;
    Object.defineProperty(Anonymous, "name", { value: "" }); // force no name
    const Wrapped = WithLogging(Anonymous);
    expect(Wrapped.displayName).toBe("WithLogging(Component)");

    logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    const { unmount } = render(<Wrapped />);
    expect(logSpy).toHaveBeenCalledWith("Component Component is mounted");
    unmount();
    expect(logSpy).toHaveBeenCalledWith("Component Component is going to unmount");
  });
});
