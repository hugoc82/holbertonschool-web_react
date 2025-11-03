import { useContext } from 'react';
import AppContext from '../App/AppContext';

function Footer() {
  const { user, logOut } = useContext(AppContext);

  // ⚠️ Garde la même structure/markup que ta version précédente pour le contenu statique.
  // Ajuste le texte fixe ci-dessous pour correspondre exactement à ton Footer actuel si besoin.
  return (
    <footer className=\"App-footer\">
      <p>Copyright 2025 - Holberton School</p>

      {user?.isLoggedIn && (
        <p id=\"logoutSection\" data-testid=\"logoutSection\">
          Welcome <strong>{user.email}</strong>
          {' '}(<a
            href=\"#logout\"
            onClick={(e) => {
              e.preventDefault();
              if (typeof logOut === 'function') logOut();
            }}
          >logout</a>)
        </p>
      )}
    </footer>
  );
}

export default Footer;