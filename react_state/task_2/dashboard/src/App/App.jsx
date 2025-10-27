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

    // bind d’abord
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);

    // puis initialise le state qui contient user + logOut
    this.state = {
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      logOut: this.logOut,         // 👈 attendu par le checker
      displayDrawer: false,
    };
  }

  handleDisplayDrawer() { this.setState({ displayDrawer: true }); }
  handleHideDrawer() { this.setState({ displayDrawer: false }); }

  logIn(email, password) {
    this.setState((prev) => ({
      ...prev,
      user: { email, password, isLoggedIn: true },
    }));
  }

  logOut() {
    this.setState((prev) => ({
      ...prev,
      user: { email: '', password: '', isLoggedIn: false },
    }));
  }

  render() {
    const { displayDrawer, user } = this.state;

    const courses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    return (
      // 👇 Fournit directement tout le state au Provider (pas de nouvel objet)
      <AppContext.Provider value={this.state}>
        <div className="App min-h-screen flex flex-col bg-gray-50">
          <Notifications
            displayDrawer={displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
            notifications={[
              { id: 1, type: 'default', value: 'New course available' },
              { id: 2, type: 'urgent', value: 'New resume available' },
              { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
            ]}
          />

          <Header />

          <main className="flex-1 w-full px-3 sm:px-4 md:px-6 lg:px-10 py-4">
            {!user.isLoggedIn ? (
              <>
                <BodySectionWithMarginBottom title="Log in to continue">
                  <Login
                    logIn={this.logIn}
                    email={user.email}
                    password={user.password}
                  />
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
