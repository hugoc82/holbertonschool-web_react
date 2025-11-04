// src/App/App.jsx
import React, { useCallback, useMemo, useState } from "react";
import AppContext, { defaultUser } from "./AppContext.jsx";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";

// ⚠️ Import depuis le nouveau fichier data.js (plus de collision de casse)
import { notificationsList } from "../Notifications/data";

export default function App() {
  const [displayDrawer, setDisplayDrawer] = useState(true);
  const [user, setUser] = useState(defaultUser);
  const [notifications, setNotifications] = useState(notificationsList);

  const handleDisplayDrawer = useCallback(() => setDisplayDrawer(true), []);
  const handleHideDrawer = useCallback(() => setDisplayDrawer(false), []);

  const logIn = useCallback((email, password) => {
    setUser({ email, password, isLoggedIn: true });
  }, []);

  const logOut = useCallback(() => {
    setUser({ ...defaultUser });
  }, []);

  const markNotificationAsRead = useCallback((id) => {
    // eslint-disable-next-line no-console
    console.log(`Notification ${id} has been marked as read`);
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  const contextValue = useMemo(() => ({ user, logIn, logOut }), [user, logIn, logOut]);

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <Notifications
          displayDrawer={displayDrawer}
          handleDisplayDrawer={handleDisplayDrawer}
          handleHideDrawer={handleHideDrawer}
          notifications={notifications}
          markNotificationAsRead={markNotificationAsRead}
        />

        <Header />

        {!user.isLoggedIn && (
          <BodySectionWithMarginBottom title="Login to access the full dashboard">
            <Login logIn={logIn} />
          </BodySectionWithMarginBottom>
        )}

        <Footer />
      </div>
    </AppContext.Provider>
  );
}
