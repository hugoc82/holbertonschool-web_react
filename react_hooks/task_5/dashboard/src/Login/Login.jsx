import React from 'react';
import PropTypes from 'prop-types';
import useLogin from '../hooks/useLogin';

export default function Login({ logIn, onLogin }) {
  // On accepte logIn (héritage des tâches précédentes) et onLogin (API de la task 5)
  const loginCallback = onLogin || logIn || (() => {});

  const {
    email,
    password,
    enableSubmit,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  } = useLogin(loginCallback);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={email}
        onChange={handleEmailChange}
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />

      <button type="submit" disabled={!enableSubmit}>OK</button>
    </form>
  );
}

Login.propTypes = {
  logIn: PropTypes.func,
  onLogin: PropTypes.func,
};
