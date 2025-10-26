import React from 'react';

export default function Header() {
  return (
    <header
      className="app-header flex items-center gap-3 bg-white px-4 py-3 border-b-4"
      style={{ borderBottomColor: 'var(--main-color)' }}
    >
      {/* Laisse ton <img> si tu en as un (logo) */}
      {/* <img src={logo} alt="Holberton logo" className="h-12 w-12" /> */}

      <h1 className="text-2xl sm:text-3xl font-bold m-0" style={{ color: 'var(--main-color)' }}>
        School dashboard
      </h1>
    </header>
  );
}
