import React, { Fragment } from "react";
import CourseList from "../CourseList/CourseList";
import Login from "../Login/Login";
import "./App.css";

export default function App({ isLoggedIn = false }) {
  const coursesList = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  return (
    <Fragment>
      <div className="App">
        {isLoggedIn ? <CourseList courses={coursesList} /> : <Login />}
      </div>
    </Fragment>
  );
}
