import React from "react";

export default function NotificationItem({
  type = "default",
  value = "",
  html = null,
}) {
  const color = type === "urgent" ? "red" : "blue";

  // Rendu conditionnel BASÉ SUR `type`
  if (type === "default") {
    return (
      <li data-notification-type={type} style={{ color }}>
        {value}
      </li>
    );
  }

  // type === "urgent"
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
