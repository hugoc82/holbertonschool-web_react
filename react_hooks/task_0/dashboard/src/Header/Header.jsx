import { useContext } from 'react';
import AppContext from '../App/AppContext';
import logo from '../assets/holberton-logo.jpg';

function Header() {
  const { user, logOut } = useContext(AppContext);

  // ⚠️ Conserve la même structure DOM que la version classe précédente.
  // Si ton ancien code utilisait <header className="App-header"> ... </header>,
  // garde-le à l’identique. Remplace ci-dessous si nécessaire.
  return (
    <header className="App-header">
      <img src={logo} alt="Holberton logo" />
      <h1>School dashboard</h1>

      {user?.isLoggedIn && (
        <p id="logoutSection" data-testid="logoutSection">
          Welcome <strong>{user.email}</strong>
          {' '}(<a
            href="#logout"
            onClick={(e) => { e.preventDefault(); if (typeof logOut === 'function') logOut(); }}
          >logout</a>)
        </p>
      )}
    </header>
  );
}

export default Header;