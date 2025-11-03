import { render, screen, fireEvent } from '@testing-library/react';
import AppContext from '../App/AppContext';
import Header from './Header';

describe('Header (hooks)', () => {
  it('renders the logo and title', () => {
    render(
      <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Header />
      </AppContext.Provider>
    );
    expect(screen.getByRole('img', { name: /holberton logo/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /school dashboard/i })).toBeInTheDocument();
  });

  it('does NOT display the logout section when user is logged out', () => {
    render(
      <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Header />
      </AppContext.Provider>
    );
    expect(screen.queryByTestId('logoutSection')).toBeNull();
    expect(screen.queryByText(/welcome/i)).toBeNull();
    expect(screen.queryByText(/logout/i)).toBeNull();
  });

  it('displays the welcome message and logout link when user is logged in', () => {
    render(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'test@test.com' } }}>
        <Header />
      </AppContext.Provider>
    );
    expect(screen.getByTestId('logoutSection')).toBeInTheDocument();
    expect(screen.getByText(/welcome/i)).toHaveTextContent('Welcome');
    expect(screen.getByText(/test@test\.com/i)).toBeInTheDocument();
    expect(screen.getByText(/logout/i)).toBeInTheDocument();
  });

  it('calls logOut when clicking the logout link', () => {
    const logOut = jest.fn();
    render(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'u@x.y' }, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    fireEvent.click(screen.getByText(/logout/i));
    expect(logOut).toHaveBeenCalledTimes(1);
  });
});