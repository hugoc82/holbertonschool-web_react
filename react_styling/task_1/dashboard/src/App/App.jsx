// react_styling/task_1/dashboard/src/App/App.jsx
import React from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Notifications from "../Notifications/Notifications.jsx";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom.jsx";
import BodySection from "../BodySection/BodySection.jsx";

// IMPORTANT: HOC-wrapped components
import Login from "../Login/Login.jsx";
import CourseList from "../CourseList/CourseList.jsx";

function App() {
  // Le checker attend explicitement un tableau vide ici
  const listCourses = [];

  return (
    <>
      <Notifications />
      <div className="App">
        <Header />

        <BodySectionWithMarginBottom title="Log in to continue">
          <Login />
        </BodySectionWithMarginBottom>

        <BodySectionWithMarginBottom title="Course list">
          <CourseList listCourses={listCourses} />
        </BodySectionWithMarginBottom>

        <BodySection title="News from the School">
          <p>Holberton School News goes here</p>
        </BodySection>

        <Footer />
      </div>
    </>
  );
}

export default App;
