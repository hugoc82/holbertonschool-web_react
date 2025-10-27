import React from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Login from '../Login/Login.jsx';
import Notifications from '../Notifications/Notifications.jsx';
import BodySection from '../BodySection/BodySection.jsx';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom.jsx';

// Le checker modifie cette valeur via script; laisse-la en place:
const isLoggedIn = false;

export default function App() {
  return (
    <div className="App min-h-screen flex flex-col bg-gray-50">
      {/* Pas de panneau ouvert en layout_1 */}
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
          // (cas loggé : pas utilisé en layout_1, on le laisse pour les autres layouts)
          <BodySectionWithMarginBottom title="Course list">
            {/* ton CourseList ici si besoin */}
            <p className="text-sm">Courses will appear here.</p>
          </BodySectionWithMarginBottom>
        )}
      </main>

      <Footer />
    </div>
  );
}
