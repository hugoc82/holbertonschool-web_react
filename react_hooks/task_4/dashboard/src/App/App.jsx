// N'importe que les hooks nécessaire (pas d'import React par défaut)
import { useState, useMemo, useCallback } from 'react';
import AppContext, { defaultUser } from './AppContext';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import { notificationsList, coursesList } from '../utils/data'; // adapte si besoin

function App() {
  // --- State ---
  const [displayDrawer, setDisplayDrawer] = useState(true);
  const [user, setUser] = useState(defaultUser); // { email:'', password:'', isLoggedIn:false }
  const [notifications, setNotifications] = useState(notificationsList);

  // --- Handlers mémoïsés ---
  const handleDisplayDrawer = useCallback(() => setDisplayDrawer(true), []);
  const handleHideDrawer = useCallback(() => setDisplayDrawer(false), []);

  const logIn = useCallback((email, password) => {
    setUser({ email, password, isLoggedIn: true });
  }, []);

  const logOut = useCallback(() => {
    setUser({ email: '', password: '', isLoggedIn: false });
  }, []);

  const markNotificationAsRead = useCallback((id) => {
    // même comportement que l’implémentation classe précédente (immuable + log)
    // eslint-disable-next-line no-console
    console.log(`Notification ${id} has been marked as read`);
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  // --- Valeur de contexte ---
  const contextValue = useMemo(() => ({ user, logOut }), [user, logOut]);

  return (
    <AppContext.Provider value={contextValue}>
      <Notifications
        displayDrawer={displayDrawer}
        listNotifications={notifications}
        markNotificationAsRead={markNotificationAsRead}
        handleDisplayDrawer={handleDisplayDrawer}
        handleHideDrawer={handleHideDrawer}
      />
      <div className="App">
        <Header />
        {user.isLoggedIn ? (
          <CourseList listCourses={coursesList} />
        ) : (
          <Login login={logIn} />
        )}
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
