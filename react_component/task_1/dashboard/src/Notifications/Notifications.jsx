// src/Notifications/Notifications.jsx
import React from "react";
import PropTypes from "prop-types";
import "./Notifications.css";
import NotificationItem from "./NotificationItem";

// liste par défaut quand la prop `notifications` est omise
const defaultNotifications = [
  { type: "default", value: "New course available" },
  { type: "urgent", value: "New resume available" },
  { type: "urgent", html: { __html: "<strong>Urgent requirement</strong> - complete by EOD" } },
];

class Notifications extends React.Component {
  // méthode demandée
  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  render() {
    const { displayDrawer = true, notifications } = this.props;

    // undefined => on utilise la liste par défaut (3 items)
    // [] => message "No new notification for now"
    const items = notifications === undefined ? defaultNotifications : notifications;

    return (
      <div className="notifications-root">
        <div className="notification-title">Your notifications</div>

        {displayDrawer && (
          <>
            <button
              type="button"
              aria-label="Close"
              onClick={() => console.log("Close button has been clicked")}
            >
              Close
            </button>

            {items.length === 0 ? (
              <p>No new notification for now</p>
            ) : (
              <>
                <p>Here is the list of notifications</p>
                <ul className="notification-items">
                  {items.map((item, idx) => (
                    <NotificationItem
                      key={item.id ?? idx}
                      id={item.id ?? idx + 1}               {/* id non 0-based */}
                      type={item.type}
                      value={item.value}
                      html={item.html}
                      markAsRead={this.markAsRead}         {/* on passe la méthode */}
                    />
                  ))}
                </ul>
              </>
            )}
          </>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      type: PropTypes.string,
      value: PropTypes.string,
      html: PropTypes.shape({ __html: PropTypes.string }),
    })
  ),
};

export default Notifications;
