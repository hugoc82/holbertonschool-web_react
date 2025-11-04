import React, { useState, useCallback } from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import AppContext from './AppContext';
import { notificationsList } from '../Notifications/notifications';

export default function App() {
  const [notifications, setNotifications] = useState(notificationsList);
  const [displayDrawer, setDisplayDrawer] = useState(true);

  const [user, setUser] = useState({ email: '', password: '', isLoggedIn: false });

  const logIn = useCallback((email, password) => {
    setUser({ email, password, isLoggedIn: true });
  }, []);

  const logOut = useCallback(() => {
    setUser({ email: '', password: '', isLoggedIn: false });
  }, []);

  const handleDisplayDrawer = useCallback(() => setDisplayDrawer(true), []);
  const handleHideDrawer = useCallback(() => setDisplayDrawer(false), []);

  const markNotificationAsRead = useCallback((id) => {
    // eslint-disable-next-line no-console
    console.log(`Notification ${id} has been marked as read`);
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  return (
    <AppContext.Provider value={{ user, logOut }}>
      <div className="App">
        <Notifications
          displayDrawer={displayDrawer}
          handleDisplayDrawer={handleDisplayDrawer}
          handleHideDrawer={handleHideDrawer}
          notifications={notifications}
          markNotificationAsRead={markNotificationAsRead}
        />

        <Header />

        {!user.isLoggedIn ? (
          <BodySectionWithMarginBottom title="Login to access the full dashboard">
            <Login logIn={logIn} />
          </BodySectionWithMarginBottom>
        ) : null}

        <Footer />
      </div>
    </AppContext.Provider>
  );
}
