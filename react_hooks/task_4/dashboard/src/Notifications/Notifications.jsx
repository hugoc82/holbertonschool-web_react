// src/Notifications/Notifications.jsx
import React from "react";
import NotificationItem from "./NotificationItem";
import closeIcon from "../assets/close-icon.png";

function Notifications({
  displayDrawer,
  notifications = [],
  handleDisplayDrawer,
  handleHideDrawer,
  markNotificationAsRead,
}) {
  if (!displayDrawer) {
    return (
      <div className="Notifications">
        <div className="menuItem" onClick={handleDisplayDrawer}>
          Your notifications
        </div>
      </div>
    );
  }

  const hasItems = notifications.length > 0;

  return (
    <div className="Notifications">
      <div className="menuItem" onClick={handleDisplayDrawer}>
        Your notifications
      </div>

      <div className="Notifications__drawer">
        <p>Here is the list of notifications</p>

        {hasItems ? (
          <>
            <button
              type="button"
              aria-label="Close"
              title="Close"
              onClick={handleHideDrawer}
            >
              <img alt="Close" src={closeIcon} />
            </button>

            <ul role="list">
              {notifications.map((n) => (
                <NotificationItem
                  key={n.id}
                  id={n.id}
                  type={n.type}
                  value={n.value}
                  html={n.html}
                  // ⚠️ le test clique sur le texte de l'item ;
                  // on doit transmettre markAsRead avec l'id
                  markAsRead={markNotificationAsRead}
                />
              ))}
            </ul>
          </>
        ) : (
          <p>No new notification for now</p>
        )}
      </div>
    </div>
  );
}

export default Notifications;
