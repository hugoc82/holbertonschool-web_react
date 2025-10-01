import React from "react";

export default function NotificationItem({ type, value, html }) {
  const color = type === "urgent" ? "red" : "blue";

  if (html) {
    return (
      <li
        data-notification-type={type}
        style={{ color }}
        dangerouslySetInnerHTML={html}
      />
    );
  }

  return (
    <li data-notification-type={type} style={{ color }}>
      {value}
    </li>
  );
}
