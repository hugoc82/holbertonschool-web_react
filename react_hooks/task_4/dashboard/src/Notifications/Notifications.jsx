import { memo } from 'react';
import NotificationItem from './NotificationItem';
import './Notifications.css';

// Accepte `notifications` (tests) et garde compat `listNotifications`
function Notifications({
  notifications = [],
  listNotifications,
  displayDrawer = false,
  handleDisplayDrawer,
  handleHideDrawer,
  markNotificationAsRead,
}) {
  const list = (listNotifications ?? notifications) || [];
  const hasItems = list.length > 0;

  return (
    <div className="Notifications">
      {!displayDrawer && (
        <div className="menuItem" onClick={handleDisplayDrawer}>
          Your notifications
        </div>
      )}

      {displayDrawer && (
        <div className="Notifications__drawer">
          {/* 👉 Bouton Close visible UNIQUEMENT s'il y a des items */}
          {hasItems && (
            <button
              type="button"
              aria-label="Close"
              title="Close"
              onClick={handleHideDrawer}
            >
              <img src="../assets/close-icon.png" alt="Close" />
            </button>
          )}

          <p>Here is the list of notifications</p>

          {!hasItems ? (
            <p>No new notification for now</p>
          ) : (
            <ul role="list">
              {list.map((n) => (
                <NotificationItem
                  key={n.id}
                  id={n.id}
                  type={n.type}
                  value={n.value}
                  html={n.html}
                  markAsRead={markNotificationAsRead}
                />
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default memo(Notifications);
