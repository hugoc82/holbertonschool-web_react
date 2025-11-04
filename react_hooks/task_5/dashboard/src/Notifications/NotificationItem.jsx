// src/Notifications/NotificationItem.jsx
import { memo } from "react";

function NotificationItem({ id, type = "default", value, html, markAsRead }) {
  const handleClick = () => markAsRead?.(id);

  return (
    <li
      role="listitem"
      data-notification-type={type}
      onClick={handleClick}
    >
      {value ? value : <span dangerouslySetInnerHTML={html} />}
    </li>
  );
}

export default memo(NotificationItem);
