import React from "react";
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import CourseList from "./CourseList/CourseList";

const coursesList = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

describe("CourseList", () => {
  test("renders 5 rows when it receives a list of courses", () => {
    render(<CourseList courses={coursesList} />);
    // 2 header rows + 3 course rows = 5 total <tr>
    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(5);
  });

  test("renders 1 row when it receives an empty array", () => {
    render(<CourseList courses={[]} />);
    // Tbody should contain 1 row (the 'No course available yet' row)
    const tbody = screen.getByRole("table").querySelector("tbody");
    const bodyRows = within(tbody).getAllByRole("row");
    expect(bodyRows).toHaveLength(1);
    expect(screen.getByText(/no course available yet/i)).toBeInTheDocument();
  });
});
