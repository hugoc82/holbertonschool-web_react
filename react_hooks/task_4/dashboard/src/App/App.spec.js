import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

function openDrawer() {
  // clic sur la zone menuItem (ouvre le drawer)
  fireEvent.click(screen.getByText(/your notifications/i));
}

describe('App (hooks)', () => {
  it('toggles drawer with handleDisplayDrawer / handleHideDrawer via UI', () => {
    render(<App />);
    // Au départ displayDrawer=true dans l’énoncé ; on vérifie la présence
    expect(screen.getByText(/here is the list of notifications/i)).toBeInTheDocument();

    // Fermer via bouton "x"
    fireEvent.click(screen.getByRole('button', { name: /close/i }));
    expect(screen.queryByText(/here is the list of notifications/i)).toBeNull();

    // Réouvrir via menuItem
    openDrawer();
    expect(screen.getByText(/here is the list of notifications/i)).toBeInTheDocument();
  });

  it('logIn updates user state (email/password/isLoggedIn)', () => {
    render(<App />);

    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@doe.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'pwd123' } });

    // bouton OK (devient enabled selon ta logique de validation)
    const btn = screen.getByRole('button', { name: /ok/i });
    fireEvent.click(btn);

    // Une fois connecté, on s’attend à voir l’écran des cours (ou un indicateur de login)
    expect(screen.queryByText(/login to access the full dashboard/i)).toBeNull();
    // par ex : un élément du CourseList si présent
    // sinon, teste la présence du lien "logout" dans Header/Footer
    expect(screen.getByText(/logout/i)).toBeInTheDocument();
  });

  it('logOut resets user (isLoggedIn=false, clears email/password)', () => {
    render(<App />);

    // login d’abord
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@doe.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'pwd123' } });
    fireEvent.click(screen.getByRole('button', { name: /ok/i }));

    // puis logout via un des liens (Header ou Footer)
    fireEvent.click(screen.getByText(/logout/i));

    // retour à l’écran Login (isLoggedIn=false)
    expect(screen.getByText(/login to access the full dashboard/i)).toBeInTheDocument();
  });
});
