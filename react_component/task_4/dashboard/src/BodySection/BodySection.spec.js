import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BodySection from "./BodySection";

describe("BodySection", () => {
  test("renders a heading with the title prop value", () => {
    render(
      <BodySection title="test-title">
        <p>child</p>
      </BodySection>
    );
    expect(
      screen.getByRole("heading", { level: 2, name: /test-title/i })
    ).toBeInTheDocument();
  });

  test("renders any number of children passed to it", () => {
    render(
      <BodySection title="multi">
        <p>child 1</p>
        <p>child 2</p>
        <span>child 3</span>
      </BodySection>
    );
    expect(screen.getByText(/child 1/i)).toBeInTheDocument();
    expect(screen.getByText(/child 2/i)).toBeInTheDocument();
    expect(screen.getByText(/child 3/i)).toBeInTheDocument();
  });
});
