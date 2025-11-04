import React, { useContext } from 'react';
import AppContext from '../App/AppContext';
import logo from '../assets/holberton-logo.jpg'; // <- important

export default function Header() {
  const { user, logOut } = useContext(AppContext);

  return (
    <header className="App-header">
      <img src={logo} alt="Holberton logo" />
      <h1>School dashboard</h1>

      {user?.isLoggedIn && (
        <div className="header-user" data-testid="logoutSection">
          <span>Welcome {user.email} — </span>
          <a href="#logout" onClick={logOut}>Logout</a>
        </div>
      )}
    </header>
  );
}
