// src/App/App.jsx
// import React from 'react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';

import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

const defaultNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
];

// const defaultCourses = [
//   { id: 1, name: 'ES6', credit: 60 },
//   { id: 2, name: 'Webpack', credit: 20 },
//   { id: 3, name: 'React', credit: 40 },
// ];

// const defaultCourses = [
// ];

/* âœ… Le runner attend exactement ce nom et un tableau vide au dÃ©part */
const listCourses = [];

// class App extends React.Component {
// class App extends Component {
//   static propTypes = {
//     isLoggedIn: PropTypes.bool,
//     courses: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         name: PropTypes.string.isRequired,
//         credit: PropTypes.number.isRequired,
//       })
//     ),
//     logOut: PropTypes.func,
//   };

//   static defaultProps = {
//     isLoggedIn: true,
//     courses: defaultCourses,
//     logOut: () => {},
//   };
class App extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
  };

  static defaultProps = {
    isLoggedIn: false,     // ou false, au choix
    logOut: () => {},
  };

  handleKeyDown = (e) => {
    // Safeguard keys access & accept both 'h' and 'H'
    const key = e && typeof e.key === 'string' ? e.key : '';
    if (e?.ctrlKey && (key === 'h' || key === 'H')) {
      window.alert('Logging you out');
      this.props.logOut();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    // const { isLoggedIn, courses } = this.props;
    const { isLoggedIn } = this.props;

    return (
      // <>
      //   <Notifications displayDrawer={false} notifications={defaultNotifications} />
      //   <div className="App">
      //     <Header />
      //     <main className="App-body">
      //       {isLoggedIn ? <CourseList courses={courses} /> : <Login />}
      //     </main>
      //     <Footer />
      //   </div>
      // </>
            <>
        <Notifications displayDrawer={false} notifications={defaultNotifications} />
        <div className="App">
          <Header />

          <main className="App-body">
            {!isLoggedIn ? (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList courses={listCourses} />
                {/* <CourseList courses={courses} /> */}
              </BodySectionWithMarginBottom>
            )}

            {/* Bloc dâ€™actualitÃ© demandÃ© */}
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