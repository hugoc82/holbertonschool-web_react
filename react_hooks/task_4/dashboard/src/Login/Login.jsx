import { useState, useContext, useMemo } from 'react';
import AppContext from '../App/AppContext';
import './Login.css';

export default function Login({ logIn: logInProp }) {
  const { logIn: logInFromContext } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValid = useMemo(() => {
    const okEmail = /\S+@\S+\.\S+/.test(email);
    return okEmail && password.length >= 8;
  }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fn = logInProp ?? logInFromContext;
    if (isValid && fn) fn(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
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

      <button type="submit" disabled={!isValid}>
        OK
      </button>
    </form>
  );
}
