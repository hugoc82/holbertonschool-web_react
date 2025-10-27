import React, { Component } from 'react';
import AppContext from '../Context/context.js';
import logo from '../assets/holberton-logo.jpg'; // ajuste le chemin si besoin

class Header extends Component {
  // ➜ permet d'accéder au contexte via this.context
  static contextType = AppContext;

  handleLogout = (e) => {
    e.preventDefault();
    const { logOut } = this.context || {};
    if (typeof logOut === 'function') logOut();
  };

  render() {
    const { user } = this.context || { user: { isLoggedIn: false } };

    return (
      <>
        <header
          className={[
            'App-header', // requis par d’anciens tests
            'app-header',
            'flex items-center gap-3 bg-white px-4 py-3 border-b-4',
            'max-[520px]:flex-col max-[520px]:items-start max-[520px]:gap-2',
          ].join(' ')}
          style={{ borderBottomColor: 'var(--main-color)' }}
        >
          <img src={logo} alt="Holberton logo" className="h-12 w-12" />
          <h1
            className="m-0 font-bold text-2xl md:text-3xl max-[520px]:text-xl"
            style={{ color: 'var(--main-color)' }}
          >
            School dashboard
          </h1>
        </header>

        {/* Section logout uniquement si connecté */}
        {user?.isLoggedIn && (
          <div
            id="logoutSection"
            className="px-4 py-2 text-sm bg-white border-b"
          >
            Welcome <strong>{user.email}</strong>{' '}
            (<a href="#logout" onClick={this.handleLogout} className="underline">
              logout
            </a>)
          </div>
        )}
      </>
    );
  }
}

export default Header;
