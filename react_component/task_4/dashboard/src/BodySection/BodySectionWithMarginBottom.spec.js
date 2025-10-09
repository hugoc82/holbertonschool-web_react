import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";

describe("BodySectionWithMarginBottom", () => {
  test("contains a div with the class bodySectionWithMargin", () => {
    const { container } = render(
      <BodySectionWithMarginBottom title="wrapper">
        <p>inner</p>
      </BodySectionWithMarginBottom>
    );
    expect(container.querySelector(".bodySectionWithMargin")).toBeInTheDocument();
  });

  test("renders the BodySection component", () => {
    const { container } = render(
      <BodySectionWithMarginBottom title="inner-title">
        <p>content</p>
      </BodySectionWithMarginBottom>
    );
    expect(
      screen.getByRole("heading", { level: 2, name: /inner-title/i })
    ).toBeInTheDocument();
    expect(container.querySelector(".bodySection")).toBeInTheDocument();
  });
});
