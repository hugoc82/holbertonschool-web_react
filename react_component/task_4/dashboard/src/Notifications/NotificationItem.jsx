// src/Notifications/NotificationItem.jsx
import React from "react";
import PropTypes from "prop-types";

class NotificationItem extends React.Component {
  render() {
    const { id, type, value, html, markAsRead } = this.props;
    const color = type === "urgent" ? "red" : "blue";

    return (
      <li
        data-notification-type={type}
        style={{ color }}
        role="listitem"
        onClick={() => {
          if (typeof markAsRead === "function") markAsRead(id);
        }}
      >
        {value ? value : html ? <span dangerouslySetInnerHTML={html} /> : null}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: "default",
};

export default NotificationItem;
