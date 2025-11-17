import React, { memo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  markNotificationAsRead,
  showDrawer,
  hideDrawer,
} from "../../features/notifications/notificationsSlice";
import { getFilteredNotifications } from "../../features/selectors/notificationSelector";
import NotificationItem from "../NotificationItem/NotificationItem";
import closeIcon from "../../assets/close-icon.png";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  menuItem: {
    float: "right",
    cursor: "pointer",
    backgroundColor: "#fff8f8",
    padding: "5px",
  },
  notifications: {
    border: "3px dotted #e1003c",
    padding: "5px",
    width: "25%",
    float: "right",
    marginTop: "20px",
    fontFamily: "Roboto, sans-serif",
  },
  closeButton: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
  },
});

const Notifications = memo(function Notifications() {
  const dispatch = useDispatch();

  const displayDrawer = useSelector(
    (state) => state.notifications.displayDrawer
  );

  const [currentFilter, setCurrentFilter] = useState("all");

  const filteredNotifications = useSelector((state) =>
    getFilteredNotifications(state, currentFilter)
  );

  const handleMarkAsRead = (id) => {
    dispatch(markNotificationAsRead(id));
  };

  const handleShowDrawer = () => {
    dispatch(showDrawer());
  };

  const handleHideDrawer = () => {
    dispatch(hideDrawer());
  };

  return (
    <>
      <div className={css(styles.menuItem)} onClick={handleShowDrawer}>
        Your notifications
      </div>

      {displayDrawer && (
        <div className={css(styles.notifications)}>
          {filteredNotifications.length > 0 ? (
            <>
              <p>Here is the list of notifications</p>
              <button
                aria-label="Close"
                onClick={handleHideDrawer}
                className={css(styles.closeButton)}
              >
                <img src={closeIcon} alt="close icon" />
              </button>

              <div>
                <button onClick={() => setCurrentFilter("urgent")}>‼️</button>
                <button onClick={() => setCurrentFilter("default")}>??</button>
              </div>

              <ul>
                {filteredNotifications.map((n) => (
                  <NotificationItem
                    key={n.id}
                    id={n.id}
                    type={n.type}
                    value={n.value}
                    markAsRead={handleMarkAsRead}
                  />
                ))}
              </ul>
            </>
          ) : (
            <p>No new notifications for now</p>
          )}
        </div>
      )}
    </>
  );
});

export default Notifications;
