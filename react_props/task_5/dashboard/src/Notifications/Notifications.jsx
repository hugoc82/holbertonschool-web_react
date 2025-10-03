import React from "react";
import NotificationItem from "./NotificationItem";

export default function Notifications({
  notifications = [],
  displayDrawer = false,
}) {
  return (
    <div className="notifications-root">
      <div className="notification-title">Your notifications</div>

      {displayDrawer && (
        <div className="notification-items">
          <button
            type="button"
            aria-label="Close"
            className="close-button"
            onClick={() => {}}
          >
            ×
          </button>

          {notifications.length === 0 ? (
            <p>No new notification for now</p>
          ) : (
            <>
              <p>Here is the list of notifications</p>
              <ul>
                {notifications.map((n) => (
                  <NotificationItem
                    key={n.id}
                    type={n.type}
                    value={n.value}
                    html={n.html}
                  />
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
}