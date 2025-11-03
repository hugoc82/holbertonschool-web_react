import { useContext } from 'react';
import AppContext from '../App/AppContext';
import holbertonLogo from '../assets/holberton-logo.jpg';
import './Header.css';

export default function Header() {
  const { user, logOut } = useContext(AppContext);

  return (
    <header className="App-header">
      <img src={holbertonLogo} alt="Holberton logo" />
      <h1>School dashboard</h1>

      {user?.isLoggedIn && (
        <div className="header-user">
          <span>Welcome {user.email} — </span>
          <a
            href="#logout"
            onClick={(e) => {
              e.preventDefault();
              logOut && logOut();
            }}
          >
            Logout
          </a>
        </div>
      )}
    </header>
  );
}
