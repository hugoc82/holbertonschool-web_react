import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="app-footer mt-8 bg-white px-4 py-3 text-center text-sm italic border-t-4 border-solid"
      style={{ borderTopColor: 'var(--main-color)' }}
    >
      <p className="m-0">Copyright {year} - Holberton School</p>
    </footer>
  );
}
