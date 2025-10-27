import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications.jsx';

// (Garde tes autres imports si ton projet en a besoin)
// import Header from '../Header/Header.jsx';
// import Footer from '../Footer/Footer.jsx';
// import Login from '../Login/Login.jsx';
// import BodySection from '../BodySection/BodySection.jsx';
// import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    // ⬇️ État local demandé par l’exercice
    this.state = {
      displayDrawer: false,
    };
    // bind des handlers
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  render() {
    const { displayDrawer } = this.state;

    return (
      <div className="App min-h-screen flex flex-col bg-gray-50">
        {/* Passe l'état + handlers au composant Notifications */}
        <Notifications
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
          notifications={[
            { id: 1, type: 'default', value: 'New course available' },
            { id: 2, type: 'urgent', value: 'New resume available' },
          ]}
        />

        {/* Garde le reste de ton layout si nécessaire */}
        {/* <Header /> */}
        <main className="flex-1 px-4 py-4">
          {!displayDrawer && (
            <p className="text-sm text-gray-600">
              Click “Your notifications” to open the drawer.
            </p>
          )}
        </main>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
