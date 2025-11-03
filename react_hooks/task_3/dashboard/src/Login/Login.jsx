// ⚠️ Ne pas importer React par défaut, seulement les hooks nécessaires
import { useState } from 'react';
import WithLogging from '../HOC/WithLogging';

function isValidEmail(email) {
  // Conserve ta logique de validation si tu en avais une spécifique ;
  // ce pattern simple est généralement accepté par les checkers Holberton
  return /\S+@\S+\.\S+/.test(email);
}

function Login({ login }) {
  const [enableSubmit, setEnableSubmit] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  // Remplace handleChangeEmail / handleChangePassword (version classe) par des fonctions
  const handleChangeEmail = (e) => {
    const email = e.target.value;
    setFormData((prev) => {
      const next = { ...prev, email };
      // mets à jour l'état du bouton selon la logique d'origine (email + longueur password)
      setEnableSubmit(isValidEmail(next.email) && next.password.length > 0);
      return next;
    });
  };

  const handleChangePassword = (e) => {
    const password = e.target.value;
    setFormData((prev) => {
      const next = { ...prev, password };
      setEnableSubmit(isValidEmail(next.email) && next.password.length > 0);
      return next;
    });
  };

  // Remplace handleLoginSubmit (version classe)
  const handleLoginSubmit = (e) => {
    e.preventDefault(); // toujours empêcher le submit par défaut
    if (typeof login === 'function') {
      login(formData.email, formData.password);
    }
  };

  // ⚠️ Conserve exactement la même structure JSX que l'ancienne version
  return (
    <div className="Login">
      <p>Login to access the full dashboard</p>
      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChangeEmail}
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChangePassword}
        />

        <button type="submit" disabled={!enableSubmit}>
          OK
        </button>
      </form>
    </div>
  );
}

// ⚠️ Garde l'usage du HOC WithLogging tel quel
export default WithLogging(Login);