// src/Notifications/NotificationItem.jsx
import React from "react";
import PropTypes from "prop-types";

class NotificationItem extends React.Component {
  handleClick = () => {
    const { id, markAsRead } = this.props;
    if (typeof markAsRead === "function") {
      markAsRead(id);
    }
  };

  render() {
    const { type, value, html } = this.props;
    const color = type === "urgent" ? "red" : "blue";

    return (
      <li
        data-notification-type={type}
        style={{ color }}
        onClick={this.handleClick}
        role="listitem"
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
