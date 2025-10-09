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
          <CourseListRow isHeader={false} textFirstCell="No course available yet" textSecondCell="" />
        ) : (
          courses.map((c) => (
            <CourseListRow
              key={c.id}
              isHeader={false}
              textFirstCell={c.name}
              textSecondCell={String(c.credit)}
            />
          ))
        )}
      </tbody>
    </table>
  );
}
