import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('Login with custom hook', () => {
  test('le bouton OK est désactivé au démarrage', () => {
    render(<Login />);
    expect(screen.getByRole('button', { name: /ok/i })).toBeDisabled();
  });

  test('reste désactivé si email invalide ou password < 8', () => {
    render(<Login />);
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@doe' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: '1234567' } });
    expect(screen.getByRole('button', { name: /ok/i })).toBeDisabled();
  });

  test('devient activé quand email valide et password >= 8', () => {
    render(<Login />);
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@doe.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password8' } });
    expect(screen.getByRole('button', { name: /ok/i })).toBeEnabled();
  });

  test('soumission appelle le callback (onLogin ou logIn) avec email/password', () => {
    const cb = jest.fn();
    render(<Login onLogin={cb} />);

    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@doe.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password8' } });
    fireEvent.click(screen.getByRole('button', { name: /ok/i }));

    expect(cb).toHaveBeenCalledTimes(1);
    expect(cb).toHaveBeenCalledWith('john@doe.com', 'password8');
  });

  test('supporte aussi l’ancienne prop "logIn"', () => {
    const cb = jest.fn();
    render(<Login logIn={cb} />);

    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'a@b.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: '12345678' } });
    fireEvent.click(screen.getByRole('button', { name: /ok/i }));

    expect(cb).toHaveBeenCalledWith('a@b.com', '12345678');
  });
});
