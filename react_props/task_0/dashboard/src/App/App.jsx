import React, { Fragment } from 'react';

import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

export default function App() {
  return (
    <Fragment>
      <Header />
      <Login />
      <Footer />
    </Fragment>
  );
}
