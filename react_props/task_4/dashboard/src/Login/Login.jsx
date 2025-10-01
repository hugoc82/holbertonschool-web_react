import React from "react";

export default function Login() {
  return (
    <main className="login">
      <p>Login to access the full dashboard</p>
      <form onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
        <button>OK</button>
      </form>
    </main>
  );
}
