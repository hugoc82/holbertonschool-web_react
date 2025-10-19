import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Notifications.css";
import NotificationItem from "./NotificationItem";

/**
 * Notifications (classe)
 * - Affiche le titre "Your notifications" en permanence
 * - Quand displayDrawer === true, affiche le bouton Close et la liste
 * - Si notifications.length === 0 => "No new notification for now"
 * - Sinon affiche la liste et "Here is the list of notifications"
 *
 * Optimisation demandée (task_5):
 * - shouldComponentUpdate: ne re-render que si la longueur de la prop notifications change
 */
class Notifications extends Component {
  static propTypes = {
    displayDrawer: PropTypes.bool,
    notifications: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        type: PropTypes.oneOf(["default", "urgent"]),
        value: PropTypes.string,
        html: PropTypes.shape({ __html: PropTypes.string }),
      })
    ),
  };

  static defaultProps = {
    displayDrawer: true,
    // Liste par défaut (non vide) pour que l'app continue d'afficher
    // "Here is the list of notifications" comme dans les tâches précédentes.
    notifications: [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      {
        id: 3,
        type: "urgent",
        html: { __html: "<strong>Urgent requirement</strong> - complete by EOD" },
      },
    ],
  };

  // --- Task 2: logging close & markAsRead ---
  onClose = () => {
    console.log("Close button has been clicked");
  };

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  // --- Task 5: n’update QUE si la longueur de notifications change ---
  shouldComponentUpdate(nextProps) {
    const prevLen = (this.props.notifications || []).length;
    const nextLen = (nextProps.notifications || []).length;
    return prevLen !== nextLen;
  }

  renderListContent() {
    const { notifications } = this.props;

    if (!notifications || notifications.length === 0) {
      return <p>No new notification for now</p>;
    }

    return (
      <>
        <p>Here is the list of notifications</p>
        <ul className="notification-items">
          {notifications.map((item, idx) => (
            <NotificationItem
              key={item.id ?? idx}
              id={item.id ?? idx + 1} // id non 0-based pour les logs/tests
              type={item.type}
              value={item.value}
              html={item.html}
              markAsRead={this.markAsRead}
            />
          ))}
        </ul>
      </>
    );
  }

  render() {
    const { displayDrawer } = this.props;

    return (
      <div className="notifications-root">
        <div className="notification-title">Your notifications</div>

        {displayDrawer && (
          <>
            <button type="button" aria-label="Close" onClick={this.onClose}>
              Close
            </button>

            {this.renderListContent()}
          </>
        )}
      </div>
    );
  }
}

export default Notifications;
