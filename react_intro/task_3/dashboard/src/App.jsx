import React from "react";
import "./App.css";
import logo from "./assets/holberton-logo.jpg";
import { getCurrentYear, getFooterCopy } from "./utils";
import Notifications from "./Notifications";

function App() {
  return (
    <>
      <div className="root-notifications">
        <Notifications />
      </div>

      <div className="App-header">
        <img src={logo} alt="holberton logo" />
        <h1>School dashboard</h1>
      </div>

      <div className="App-body">
        <p>Login to access the full dashboard</p>

        {/* éléments à plat, sans wrapper, dans cet ordre précis */}
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" />

        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />

        <button type="button">OK</button>
      </div>

      <div className="App-footer">
        <p>
          Copyright {getCurrentYear()} - {getFooterCopy(true)}
        </p>
      </div>
    </>
  );
}

export default App;
