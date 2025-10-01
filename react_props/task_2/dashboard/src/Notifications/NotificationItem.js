import React from "react";

export default function NotificationItem({ type = "default", html, value }) {
  const color = type === "urgent" ? "red" : "blue";
  const commonProps = {
    "data-notification-type": type,
    style: { color }
  };

  // Si html est fourni, on l'affiche; sinon on affiche value
  if (html) {
    return <li {...commonProps} dangerouslySetInnerHTML={html} />;
  }
  return <li {...commonProps}>{value}</li>;
}
