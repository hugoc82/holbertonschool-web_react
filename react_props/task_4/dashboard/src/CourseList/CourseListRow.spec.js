import React from "react";
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import CourseListRow from "./CourseListRow";

describe("CourseListRow", () => {
  describe("isHeader = true", () => {
    test("with textSecondCell = null -> one columnheader with colspan=2", () => {
      render(<table><tbody><CourseListRow isHeader={true} textFirstCell="Available courses" /></tbody></table>);
      const th = screen.getByRole("columnheader", { name: /available courses/i });
      expect(th).toBeInTheDocument();
      expect(th).toHaveAttribute("colspan", "2");
    });

    test("with textSecondCell set -> renders 2 <th>", () => {
      render(<table><tbody><CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" /></tbody></table>);
      const row = screen.getByRole("row");
      const headers = within(row).getAllByRole("columnheader");
      expect(headers).toHaveLength(2);
      expect(headers[0]).toHaveTextContent(/course name/i);
      expect(headers[1]).toHaveTextContent(/credit/i);
    });
  });

  describe("isHeader = false", () => {
    test("renders 2 <td> within a <tr>", () => {
      render(<table><tbody><CourseListRow textFirstCell="ES6" textSecondCell={60} /></tbody></table>);
      const row = screen.getByRole("row");
      const cells = within(row).getAllByRole("cell");
      expect(cells).toHaveLength(2);
      expect(cells[0]).toHaveTextContent("ES6");
      expect(cells[1]).toHaveTextContent("60");
    });
  });
});
