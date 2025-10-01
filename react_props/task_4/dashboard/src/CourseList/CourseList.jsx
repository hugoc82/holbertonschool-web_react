import React from "react";
import "./CourseList.css";
import CourseListRow from "./CourseListRow";

export default function CourseList({ courses = [] }) {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow isHeader={true} textFirstCell="Available courses" />
        <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
      </thead>
      <tbody>
        {courses.length === 0 ? (
          <tr className="empty-row">
            <td colSpan="2">No course available yet</td>
          </tr>
        ) : (
          courses.map((c) => (
            <CourseListRow
              key={c.id}
              isHeader={false}
              textFirstCell={c.name}
              textSecondCell={c.credit}
            />
          ))
        )}
      </tbody>
    </table>
  );
}
