import React from 'react';
import AppContext from '../Context/context.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <AppContext.Consumer>
      {({ user }) => (
        <footer
          className="app-footer mt-auto bg-white px-4 py-3 text-center italic text-sm md:text-base border-t-4 border-solid"
          style={{ borderTopColor: 'var(--main-color)' }}
        >
          <p className="m-0">Copyright {year} - Holberton School</p>

          {/* Paragraphe conditionnel quand connecté */}
          {user?.isLoggedIn && (
            <p className="not-italic mt-2">
              <a href="#contact">Contact us</a>
            </p>
          )}
        </footer>
      )}
    </AppContext.Consumer>
  );
}
