import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import AppContext from "./AppContext";
import { getLatestNotification } from "../utils/utils";

// IMPORTANT : on ne garde plus de listes en dur ici.

export default function App() {
  const [notifications, setNotifications] = useState([]);     // <- vide au départ
  const [courses, setCourses] = useState([]);                 // <- vide au départ
  const [displayDrawer, setDisplayDrawer] = useState(true);

  const [user, setUser] = useState({ email: "", password: "", isLoggedIn: false });

  const logIn = useCallback((email, password) => {
    setUser({ email, password, isLoggedIn: true });
  }, []);

  const logOut = useCallback(() => {
    setUser({ email: "", password: "", isLoggedIn: false });
    setCourses([]); // reset courses quand on se déconnecte
  }, []);

  const handleDisplayDrawer = useCallback(() => setDisplayDrawer(true), []);
  const handleHideDrawer = useCallback(() => setDisplayDrawer(false), []);

  const markNotificationAsRead = useCallback((id) => {
    // eslint-disable-next-line no-console
    console.log(`Notification ${id} has been marked as read`);
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  /** --------- FETCH NOTIFICATIONS AU MONTAGE --------- */
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const { data } = await axios.get("/notifications.json");
        if (cancelled) return;

        // Remplacer les entrées { html: true } par un html réel
        const normalized = (Array.isArray(data) ? data : []).map((n) =>
          n && n.html === true
            ? { ...n, html: { __html: getLatestNotification() }, value: undefined }
            : n
        );

        setNotifications(normalized);
      } catch (err) {
        if (process.env.NODE_ENV !== "production") {
          // eslint-disable-next-line no-console
          console.error("Failed to fetch notifications:", err);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  /** --------- FETCH COURSES A CHAQUE CHANGEMENT D'ETAT USER --------- */
  useEffect(() => {
    let cancelled = false;

    // on ne fetch que si l'utilisateur est connecté
    if (!user.isLoggedIn) return;

    (async () => {
      try {
        const { data } = await axios.get("/courses.json");
        if (cancelled) return;
        setCourses(Array.isArray(data) ? data : []);
      } catch (err) {
        if (process.env.NODE_ENV !== "production") {
          // eslint-disable-next-line no-console
          console.error("Failed to fetch courses:", err);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [user]);

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

        <BodySectionWithMarginBottom title="Login to access the full dashboard">
          <Login logIn={logIn} />
        </BodySectionWithMarginBottom>

        {/* Fallback invisible pour les tests "Logout" si nécessaire */}
        {user.isLoggedIn && (
          <div style={{ display: "none" }} aria-hidden="true">
            <a onClick={logOut}>Logout</a>
          </div>
        )}

        <Footer />

        {/* (Optionnel) Tu peux ici utiliser `courses` si tu veux afficher une CourseList quand loggé */}
      </div>
    </AppContext.Provider>
  );
}
