import React, { useState } from 'react';

export default function Login({ logIn = () => {} }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isEmailValid = /\S+@\S+\.\S+/.test(email);
  const isPasswordValid = password.length >= 6;
  const canSubmit = isEmailValid && isPasswordValid;

  const onSubmit = (e) => {
    e.preventDefault();
    if (canSubmit) {
      logIn(email, password);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" disabled={!canSubmit}>OK</button>
    </form>
  );
}
