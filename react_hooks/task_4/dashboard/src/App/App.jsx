// src/App/App.jsx
import React, { useCallback, useState } from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import AppContext from "./AppContext";
import { notificationsList } from "../Notifications/notifications";

export default function App() {
  // fallback pour garantir >=1 item (afin que le bouton Close existe)
  const initialNotifs =
    Array.isArray(notificationsList) && notificationsList.length > 0
      ? notificationsList
      : [{ id: 1, type: "default", value: "New course available" }];

  const [notifications, setNotifications] = useState(initialNotifs);
  const [displayDrawer, setDisplayDrawer] = useState(true);

  const [user, setUser] = useState({ email: "", password: "", isLoggedIn: false });

  const logIn = useCallback((email, password) => {
    setUser({ email, password, isLoggedIn: true });
  }, []);

  const logOut = useCallback(() => {
    setUser({ email: "", password: "", isLoggedIn: false });
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

        {!user.isLoggedIn && (
          <BodySectionWithMarginBottom title="Login to access the full dashboard">
            {/* IMPORTANT: prop attendue par Login = logIn */}
            <Login logIn={logIn} />
          </BodySectionWithMarginBottom>
        )}

        <Footer />
      </div>
    </AppContext.Provider>
  );
}
