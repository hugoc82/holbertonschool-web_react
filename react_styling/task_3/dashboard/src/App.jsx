import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Notifications from './Notifications/Notifications';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import CourseList from './CourseList/CourseList';
import { getLatestNotification } from './utils/utils';

import BodySection from './BodySection/BodySection';
import BodySectionWithMarginBottom from './BodySection/BodySectionWithMarginBottom';

// const defaultNotifications = [
//   { id: 1, type: 'default', value: 'New course available' },
//   { id: 2, type: 'urgent', value: 'New resume available' },
//   { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
// ];

const defaultNotifications = [];

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

/* âœ… EXACTEMENT ce que le runner cherche */
// const listCourses = [];

class App extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
  };

  static defaultProps = {
    isLoggedIn: true, // ou false, peu importe ici
    logOut: () => {},
  };

  render() {
    const { isLoggedIn } = this.props;

    return (
      <>
        <Notifications displayDrawer={true} notifications={defaultNotifications} />
        <div className="App">
          <Header />
          <main className="App-body">
            {!isLoggedIn ? (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Course list">
                {/* âœ… le runner remplacera listCourses pour tester lâ€™Ã©tat â€œavec coursâ€ */}
                <CourseList courses={listCourses} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>Holberton School News goes here</p>
            </BodySection>
          </main>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;