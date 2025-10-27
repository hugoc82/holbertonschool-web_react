import React from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Login from '../Login/Login.jsx';
import Notifications from '../Notifications/Notifications.jsx';
import BodySection from '../BodySection/BodySection.jsx';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom.jsx';
import CourseList from '../CourseList/CourseList.jsx';

// Le checker peut écraser cette valeur via script
const isLoggedIn = false;

export default function App() {
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  return (
    <div className="App min-h-screen flex flex-col bg-gray-50">
      {/* Tu peux mettre false pour layout_1 afin d’éviter le drawer visible */}
      <Notifications displayDrawer={false} />

      <Header />

      <main className="flex-1 w-full px-3 sm:px-4 md:px-6 lg:px-10 py-4">
        {!isLoggedIn ? (
          <>
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
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
              <CourseList listCourses={listCourses} />
            </div>
          </BodySectionWithMarginBottom>
        )}
      </main>

      <Footer />
    </div>
  );
}
