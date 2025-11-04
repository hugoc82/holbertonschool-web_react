// src/Notifications/Notifications.jsx
import React, { memo } from "react";
import closeIcon from "../assets/close_icon.png";

function Notifications({
  displayDrawer = false,
  notifications = [],
  handleDisplayDrawer,
  handleHideDrawer,
  markNotificationAsRead,
}) {
  // État fermé : on n'affiche que le menuItem cliquable
  if (!displayDrawer) {
    return (
      <div className="Notifications">
        <div className="menuItem" onClick={handleDisplayDrawer}>
          Your notifications
        </div>
      </div>
    );
  }

  const hasItems = (notifications?.length ?? 0) > 0;

  return (
    <div className="Notifications">
      <div className="menuItem" onClick={handleDisplayDrawer}>
        Your notifications
      </div>

      <div className="Notifications__drawer">
        {/* ⚠️ Exigence test: quand la liste est VIDE, NE PAS afficher le bouton Close */}
        {hasItems && (
          <button
            type="button"
            aria-label="Close"
            title="Close"
            onClick={handleHideDrawer}
          >
            <img alt="Close" src={closeIcon} />
          </button>
        )}

        <p>Here is the list of notifications</p>

        {hasItems ? (
          <ul>
            {notifications.map((n) => (
              <li
                key={n.id}
                role="listitem"
                data-notification-type={n.type || "default"}
                onClick={() => markNotificationAsRead?.(n.id)}
              >
                {n.value ? (
                  n.value
                ) : (
                  <span dangerouslySetInnerHTML={n.html} />
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No new notification for now</p>
        )}
      </div>
    </div>
  );
}

export default memo(Notifications);
