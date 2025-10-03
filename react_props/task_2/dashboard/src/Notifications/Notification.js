import React from "react";
import NotificationItem from "./NotificationItem";

const defaultList = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  {
    id: 3,
    type: "urgent",
    html: { __html: "<strong>Urgent requirement</strong> - complete by EOD" },
  },
];

export default function Notifications({ notifications = [] }) {
  const items = notifications.length ? notifications : defaultList;

  return (
    <div className="notifications" role="region" aria-label="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        {items.map((n) => (
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
