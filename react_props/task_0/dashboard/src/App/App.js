import React, { Fragment } from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import Login from "../Login/Login.jsx";
import Footer from "../Footer/Footer.js";
import Notifications from "../Notifications/Notifications.jsx";

function App() {
  return (
    <Fragment>
      <Notifications />
      <div className="App">
        <Header />
        <Login />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
