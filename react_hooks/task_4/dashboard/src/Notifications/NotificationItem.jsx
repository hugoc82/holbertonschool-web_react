import { memo } from 'react';

function NotificationItem({ id, type = 'default', value, html, markAsRead }) {
  return (
    <li
      role="listitem"
      data-notification-type={type}
      onClick={() => markAsRead?.(id)}
    >
      {value ?? <span dangerouslySetInnerHTML={html} />}
    </li>
  );
}

export default memo(NotificationItem);
