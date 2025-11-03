import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications.jsx';
import Header from '../Header/Header.jsx';
import Login from '../Login/Login.jsx';
import Footer from '../Footer/Footer.jsx';
import BodySection from '../BodySection/BodySection.jsx';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom.jsx';
import CourseList from '../CourseList/CourseList.jsx';
import AppContext from '../Context/context.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);

    const user = { email: '', password: '', isLoggedIn: false };

    this.state = {
      user,
      displayDrawer: false,

      // ✅ State avancé
      notifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
      ],
      courses: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],

      // valeur du Provider (référence stable stockée en state)
      contextValue: {
        user,
        logOut: this.logOut,
      },
    };
  }

  // Notifications drawer
  handleDisplayDrawer() { this.setState({ displayDrawer: true }); }
  handleHideDrawer() { this.setState({ displayDrawer: false }); }

  // Auth
  logIn(email, password) {
    const user = { email, password, isLoggedIn: true };
    this.setState((prev) => ({
      ...prev,
      user,
      contextValue: { ...prev.contextValue, user },
    }));
  }

  logOut() {
    const user = { email: '', password: '', isLoggedIn: false };
    this.setState((prev) => ({
      ...prev,
      user,
      contextValue: { ...prev.contextValue, user },
    }));
  }

  // ✅ Marquer une notif comme lue
  markNotificationAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
    this.setState((prev) => ({
      ...prev,
      notifications: prev.notifications.filter((n) => n.id !== id),
    }));
  }

  render() {
    const { displayDrawer, user, contextValue, notifications, courses } = this.state;

    return (
      <AppContext.Provider value={contextValue}>
        <div className="App min-h-screen flex flex-col bg-gray-50">
          <Notifications
            displayDrawer={displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
            notifications={notifications}                         {/* ← depuis state */}
            markNotificationAsRead={this.markNotificationAsRead}  {/* ← nouvelle prop */}
          />

          <Header />

          <main className="flex-1 w-full px-3 sm:px-4 md:px-6 lg:px-10 py-4">
            {!user.isLoggedIn ? (
              <>
                <BodySectionWithMarginBottom title="Log in to continue">
                  <Login logIn={this.logIn} email={user.email} password={user.password} />
                </BodySectionWithMarginBottom>

                <BodySection title="News from the school">
                  <p className="text-sm md:text-base leading-relaxed">
                    ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, asperiores
                    architecto blanditiis fuga doloribus sit illum aliquid ea distinctio minus accusantium,
                    impedit quo voluptatibus ut magni dicta. Recusandae, quia dicta?
                  </p>
                </BodySection>
              </>
            ) : (
              <BodySectionWithMarginBottom title="Course list">
                <div className="bg-white rounded shadow-sm p-3">
                  <CourseList courses={courses} />
                </div>
              </BodySectionWithMarginBottom>
            )}
          </main>

          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
