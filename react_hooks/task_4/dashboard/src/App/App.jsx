import { useState, useMemo, useCallback } from 'react';
import AppContext, { defaultUser } from './AppContext';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import { notificationsList, coursesList } from '../utils/data';

function App() {
  const [displayDrawer, setDisplayDrawer] = useState(true); // 👉 ouvert par défaut
  const [user, setUser] = useState(defaultUser);
  const [notifications, setNotifications] = useState(notificationsList);
  const [courses] = useState(coursesList);

  const handleDisplayDrawer = useCallback(() => setDisplayDrawer(true), []);
  const handleHideDrawer = useCallback(() => setDisplayDrawer(false), []);

  const logIn = useCallback((email, password) => {
    setUser({ email, password, isLoggedIn: true });
  }, []);

  const logOut = useCallback(() => {
    setUser(defaultUser);
  }, []);

  const markNotificationAsRead = useCallback((id) => {
    // log + retrait de la liste
    // eslint-disable-next-line no-console
    console.log(`Notification ${id} has been marked as read`);
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  const ctxValue = useMemo(
    () => ({ user, logIn, logOut }),
    [user, logIn, logOut]
  );

  return (
    <AppContext.Provider value={ctxValue}>
      <Notifications
        displayDrawer={displayDrawer}
        handleDisplayDrawer={handleDisplayDrawer}
        handleHideDrawer={handleHideDrawer}
        notifications={notifications}
        markNotificationAsRead={markNotificationAsRead}
      />

      <div className="App">
        <Header />
        {user.isLoggedIn ? <CourseList courses={courses} /> : <Login logIn={logIn} />}
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
