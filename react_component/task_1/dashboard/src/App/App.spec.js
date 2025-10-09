// src/App/App.spec.js
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App lifecycles - keyboard", () => {
  let alertSpy;

  beforeEach(() => {
    // mock propre de window.alert
    alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});
  });

  afterEach(() => {
    // restore pour éviter les fuites entre tests
    alertSpy.mockRestore();
  });

  test("Ctrl+h déclenche logOut exactement une fois", () => {
    const logOut = jest.fn();
    const { unmount } = render(<App logOut={logOut} />);

    // simule Ctrl + h
    fireEvent.keyDown(document, { key: "h", ctrlKey: true });

    expect(logOut).toHaveBeenCalledTimes(1);

    // (bonus) après unmount, l’event listener est retiré
    unmount();
    fireEvent.keyDown(document, { key: "h", ctrlKey: true });
    expect(logOut).toHaveBeenCalledTimes(1);
  });

  test('Ctrl+h déclenche alert("Logging you out")', () => {
    const logOut = jest.fn();
    render(<App logOut={logOut} />);

    fireEvent.keyDown(document, { key: "H", ctrlKey: true }); // majuscule OK aussi

    expect(alertSpy).toHaveBeenCalledWith("Logging you out");
  });
});
