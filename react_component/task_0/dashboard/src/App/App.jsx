// src/App/App.jsx
import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";

class App extends Component {
  render() {
    const { isLoggedIn } = this.props;

    return (
      <>
        {/* Notifications est souvent rendu en-dehors du container principal */}
        <Notifications />
        <div className="App">
          <Header />
          {isLoggedIn ? <CourseList /> : <Login />}
          <Footer />
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
