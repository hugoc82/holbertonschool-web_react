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

const Notifications = ({ displayDrawer = true, notifications }) => {
  // si notifications est undefined → on prend la liste par défaut (3 items)
  // si notifications est [] (vide) → on affichera "No new notification for now"
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
                    type={item.type}
                    value={item.value}
                    html={item.html}
                  />
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </div>
  );
};

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
