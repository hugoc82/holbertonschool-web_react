import React from 'react';

export default function Login() {
  return (
    <section
      className="login-section mx-auto mt-6 w-full max-w-3xl rounded-md bg-white p-4 shadow border-t-4 border-solid"
      style={{ borderTopColor: 'var(--main-color)' }}
    >
      <p className="mb-4 text-base">Login to access the full dashboard</p>

      <form className="flex flex-wrap items-center gap-2 sm:gap-3">
        <label htmlFor="email" className="mr-1">Email:</label>
        <input
          id="email"
          type="email"
          className="input-email rounded border border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-300"
        />

        <label htmlFor="password" className="ml-2 mr-1">Password:</label>
        <input
          id="password"
          type="password"
          className="input-password rounded border border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-300"
        />

        <button
          type="submit"
          className="btn-ok ml-2 rounded bg-gray-900 px-3 py-1 text-white hover:opacity-90"
        >
          OK
        </button>
      </form>
    </section>
  );
}
