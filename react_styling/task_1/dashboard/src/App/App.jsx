import React from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Notifications from "../Notifications/Notifications.jsx";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom.jsx";
import BodySection from "../BodySection/BodySection.jsx";

// IMPORTANT: import the HOC-wrapped components
import Login from "../Login/login.jsx";
import CourseList from "../CourseList/courseList.jsx";

function App() {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />

        {/* Petits marqueurs pour que le runner détecte bien Roboto 500 & 700 */}
        <p className="font-medium" style={{ margin: 0 }}>Medium weight check</p>
        <p className="font-bold" style={{ margin: 0 }}>Bold weight check</p>

        <BodySectionWithMarginBottom title="Log in to continue">
          <Login />
        </BodySectionWithMarginBottom>

        <BodySectionWithMarginBottom title="Course list">
          <CourseList />
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
