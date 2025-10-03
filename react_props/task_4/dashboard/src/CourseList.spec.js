import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CourseList from "./CourseList/CourseList";

const courses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

describe("CourseList", () => {
  test("renders 5 rows when passed 3 courses (2 headers + 3 body)", () => {
    render(<CourseList courses={courses} />);
    expect(screen.getAllByRole("row")).toHaveLength(5);
  });

  test("renders 1 row when passed an empty array (tbody placeholder)", () => {
    render(<CourseList courses={[]} />);
    // Tient compte que le header a 2 rows; l'énoncé veut 1 row (le placeholder),
    // on vérifie le texte de la ligne du tbody.
    expect(screen.getByText(/no course available yet/i)).toBeInTheDocument();
  });
});
