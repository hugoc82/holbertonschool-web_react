// src/Login/Login.jsx
import React, { useState, useMemo, useCallback } from "react";

export default function Login({ logIn, onLogin }) {
  const loginFn = onLogin ?? logIn ?? (() => {});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isEmailValid = useMemo(() => /\S+@\S+\.\S+/.test(email), [email]);
  const isPasswordValid = useMemo(() => password.length >= 8, [password]);
  const enableSubmit = isEmailValid && isPasswordValid;

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (enableSubmit) loginFn(email, password);
    },
    [enableSubmit, email, password, loginFn]
  );

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

      <button type="submit" disabled={!enableSubmit}>
        OK
      </button>
    </form>
  );
}
