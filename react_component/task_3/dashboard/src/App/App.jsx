import React from "react";
import PropTypes from "prop-types";
import "./App.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";

// nouveaux composants
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";

class App extends React.Component {
  render() {
    const { isLoggedIn, logOut } = this.props;

    return (
      <>
        <Notifications />
        <div className="App">
          <Header />
          {/* Contenu principal */}
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}

          {/* Bloc News toujours présent */}
          <BodySection title="News from the School">
            <p>Holberton School News goes here</p>
          </BodySection>

          <Footer />
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

export default App;
