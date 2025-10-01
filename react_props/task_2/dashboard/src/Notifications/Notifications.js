import React from "react";
import NotificationItem from "./NotificationItem";

export default function Notifications({ notifications = [] }) {
  return (
    <div className="notifications" role="region" aria-label="Notifications">
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
    </div>
  );
}
