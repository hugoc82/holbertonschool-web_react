import { useCallback, useMemo, useState } from 'react';

/**
 * Custom hook pour gérer le formulaire de login.
 * - Valide l'email
 * - Valide un mot de passe d'au moins 8 caractères
 * - Expose les handlers et l'état au composant
 */
export default function useLogin(onLogin = () => {}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isEmailValid = useMemo(() => /\S+@\S+\.\S+/.test(email), [email]);
  const isPasswordValid = useMemo(() => password.length >= 8, [password]);
  const enableSubmit = isEmailValid && isPasswordValid;

  const handleEmailChange = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const handlePasswordChange = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (enableSubmit) {
        onLogin(email, password);
      }
    },
    [enableSubmit, onLogin, email, password]
  );

  return {
    email,
    password,
    enableSubmit,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  };
}
