import React from "react";
import "./App.css";
import logo from "./assets/holberton-logo.jpg";
import Notifications from "./Notifications";
import { getCurrentYear, getFooterCopy } from "./utils";

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

        {/* Formulaire task_2 */}
        <div className="login-form" role="form" aria-label="Login form">
          <div className="form-row">
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" autoComplete="email" />
          </div>

          <div className="form-row">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
            />
          </div>

          <button type="button">OK</button>
        </div>
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
