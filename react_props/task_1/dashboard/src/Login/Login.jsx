import React from "react";

export default function Login() {
  return (
    <main className="login">
      <p>Login to access the full dashboard</p>
      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" />
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />
        <button type="submit">OK</button>
      </form>
    </main>
  );
}
