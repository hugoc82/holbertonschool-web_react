import { useContext } from 'react';
import AppContext from '../App/AppContext';
import './Footer.css';

export default function Footer() {
  const { user } = useContext(AppContext);

  return (
    <footer className="App-footer">
      <p>Copyright 2025 - Holberton School</p>

      {user?.isLoggedIn && (
        <p>
          <a href="#contact">Contact us</a>
        </p>
      )}
    </footer>
  );
}
