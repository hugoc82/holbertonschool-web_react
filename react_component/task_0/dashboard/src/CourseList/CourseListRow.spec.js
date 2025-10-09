import React from "react";
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import CourseListRow from "./CourseListRow";

describe("CourseListRow", () => {
  test("isHeader=true && textSecondCell=null -> 1 th with colspan=2", () => {
    render(<table><tbody><CourseListRow isHeader={true} textFirstCell="Available courses" /></tbody></table>);
    const th = screen.getByRole("columnheader", { name: /available courses/i });
    expect(th).toBeInTheDocument();
    expect(th).toHaveAttribute("colspan", "2");
  });

  test("isHeader=true && textSecondCell not null -> 2 th cells", () => {
    render(<table><tbody><CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" /></tbody></table>);
    const row = screen.getByRole("row");
    const headers = within(row).getAllByRole("columnheader");
    expect(headers).toHaveLength(2);
  });

  test("isHeader=false -> 2 td cells", () => {
    render(<table><tbody><CourseListRow isHeader={false} textFirstCell="ES6" textSecondCell="60" /></tbody></table>);
    const row = screen.getByRole("row");
    const cells = within(row).getAllByRole("cell");
    expect(cells).toHaveLength(2);
  });
});
