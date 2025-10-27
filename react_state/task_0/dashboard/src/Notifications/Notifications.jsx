import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Si ton projet a déjà un NotificationItem séparé, importe-le.
// Ici on garde le rendu simple pour l’exercice.
class Notifications extends Component {
  // ⚠️ Le sujet rappelle que tu as implémenté shouldComponentUpdate :
  // on l’adapte pour re-render si displayDrawer OU longueur de notifications change.
  shouldComponentUpdate(nextProps) {
    const lengthChanged =
      (this.props.notifications?.length || 0) !==
      (nextProps.notifications?.length || 0);
    const drawerChanged = this.props.displayDrawer !== nextProps.displayDrawer;
    return lengthChanged || drawerChanged;
  }

  render() {
    const {
      displayDrawer,
      handleDisplayDrawer,
      handleHideDrawer,
      notifications = [],
    } = this.props;

    // Menu fermé : cliquer sur le titre ouvre le drawer
    if (!displayDrawer) {
      return (
        <div
          className="notification-title px-3 py-2 cursor-pointer select-none"
          onClick={handleDisplayDrawer}
          data-testid="menu-item"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') handleDisplayDrawer();
          }}
          aria-label="Open notifications"
        >
          Your notifications
        </div>
      );
    }

    // Drawer ouvert
    return (
      <div
        className="Notifications notification-drawer fixed top-0 right-0 w-[380px] max-w-full bg-white border-l-2 border-b-2 shadow p-4"
        role="region"
        aria-label="Notifications"
        style={{ borderColor: 'var(--main-color)' }}
      >
        <div className="notification-title font-bold px-1 pb-2 border-b">
          Your notifications
        </div>

        <div className="notification-items pt-3">
          {notifications.length === 0 ? (
            <p>No new notification for now</p>
          ) : (
            <ul className="list-disc ml-5">
              {notifications.map((n) => (
                <li
                  key={n.id}
                  data-notification-type={n.type}
                  className="py-1"
                >
                  {n.value || (
                    <span dangerouslySetInnerHTML={n.html} />
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          aria-label="Close"
          title="Close"
          onClick={handleHideDrawer}
          data-testid="close-btn"
          className="absolute top-2 right-2 h-8 w-8 rounded hover:bg-gray-100"
        >
          ✕
        </button>
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool.isRequired,
  handleDisplayDrawer: PropTypes.func.isRequired,
  handleHideDrawer: PropTypes.func.isRequired,
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      type: PropTypes.oneOf(['default', 'urgent']),
      value: PropTypes.string,
      html: PropTypes.shape({ __html: PropTypes.string }),
    })
  ),
};

export default Notifications;
