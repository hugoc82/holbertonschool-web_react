// src/App/App.jsx
import React, { useCallback, useMemo, useState } from "react";
import AppContext, { defaultUser } from "../AppContext.jsx";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import { notificationsList } from "../Notifications/notifications";

// 🚫 Aucun code de classe ni “class App” ici (même pas en commentaire)

export default function App() {
  // --- états demandés (hooks) ---
  const [displayDrawer, setDisplayDrawer] = useState(true);
  const [user, setUser] = useState(defaultUser);
  const [notifications, setNotifications] = useState(notificationsList);

  // --- handlers mémorisés ---
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

  // --- valeur de contexte stable ---
  const ctxValue = useMemo(() => ({ user, logOut }), [user, logOut]);

  return (
    <AppContext.Provider value={ctxValue}>
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
            {/* Le Login doit appeler la prop logIn(email, password) */}
            <Login logIn={logIn} />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title="Course list">
            {/* on peut mettre ici un placeholder simple pour les tests */}
            <div>Welcome {user.email}</div>
          </BodySectionWithMarginBottom>
        )}

        <Footer />
      </div>
    </AppContext.Provider>
  );
}
