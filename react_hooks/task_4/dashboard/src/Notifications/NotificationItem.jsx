// src/Notifications/NotificationItem.jsx
import React, { memo } from "react";
import PropTypes from "prop-types";

function NotificationItem({ id, type = "default", value, html, markAsRead }) {
  return (
    <li
      role="listitem"
      data-notification-type={type}
      onClick={() => markAsRead?.(id)}
    >
      {value ? value : <span dangerouslySetInnerHTML={html} />}
    </li>
  );
}

NotificationItem.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  markAsRead: PropTypes.func,
};

export default memo(NotificationItem);
