﻿import React from "react";
import { Fragment } from 'react'
import './App.css'
import Notifications from '../Notifications/Notifications.jsx'
import Header from '../Header/Header.jsx'
import Login from '../Login/Login.jsx'
import Footer from '../Footer/Footer.jsx'

function App() {
  return (
    <Fragment>
      <div className="root-notifications">
        <Notifications />
      </div>
      <Header />
      <Login />
      <Footer />
    </Fragment>
  )
}

export default App