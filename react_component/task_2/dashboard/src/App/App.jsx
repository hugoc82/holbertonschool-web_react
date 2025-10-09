// src/App/App.jsx
import React from "react";
import PropTypes from "prop-types";
import "./App.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";

class App extends React.Component {
  constructor(props) {
    super(props);
    // lie la méthode si tu ne veux pas de propriété fléchée
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    // écoute globale clavier
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    // important: cleanup
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(e) {
    // Ctrl + h (insensible à la casse)
    const isH = e.key === "h" || e.key === "H" || e.keyCode === 72;
    if (e.ctrlKey && isH) {
      // alerte + appel logOut
      // (le texte exact est vérifié par les tests)
      // eslint-disable-next-line no-alert
      alert("Logging you out");
      this.props.logOut();
    }
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <>
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
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}, // valeur par défaut exigée par l’énoncé
};

export default App;
