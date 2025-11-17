import { memo, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { markNotificationAsRead } from "../../features/notifications/notificationsSlice";
import NotificationItem from "../NotificationItem/NotificationItem";
import { getFilteredNotifications } from "../../features/selectors/notificationSelector";
import closeIcon from "../../assets/close-icon.png";
import { StyleSheet, css } from "aphrodite";

const opacityKeyframes = {
  from: { opacity: 0.5 },
  to: { opacity: 1 },
};

const bounceKeyframes = {
  "0%": { transform: "translateY(0px)" },
  "50%": { transform: "translateY(-5px)" },
  "100%": { transform: "translateY(5px)" },
};

const styles = StyleSheet.create({
  notificationItems: {
    position: "relative",
    border: "3px dotted #e1003c",
    padding: "5px",
    fontFamily: "Roboto, sans-serif",
    width: "25%",
    float: "right",
    marginTop: "20px",
    maxHeight: "25vh",
    overflowY: "auto",
    opacity: 0,
    visibility: "hidden",
    transition: "opacity 0.3s ease, visibility 0.3s ease",
  },
  visible: {
    opacity: 1,
    visibility: "visible",
  },
  ul: {},
  p: { margin: 0 },
  button: {
    position: "absolute",
    cursor: "pointer",
    right: "calc(0% - 480px)",
    top: "calc(0% - 480px)",
    background: "transparent",
    transform: "scale(0.012)",
  },
  menuItem: {
    float: "right",
    position: "absolute",
    right: "10px",
    top: "2px",
    backgroundColor: "#fff8f8",
    cursor: "pointer",
    ":hover": {
      animationName: [opacityKeyframes, bounceKeyframes],
      animationDuration: "1s, 0.5s",
      animationIterationCount: "3, 3",
    },
  },
});

const Notifications = memo(function Notifications() {
  const dispatch = useDispatch();
  const DrawerRef = useRef(null);

  const filteredNotifications = useSelector(getFilteredNotifications);

  const handleToggleDrawer = useCallback(() => {
    if (DrawerRef.current) {
      DrawerRef.current.classList.toggle(css(styles.visible));
    }
  }, []);

  const handleMarkNotificationAsRead = useCallback(
    (id) => {
      dispatch(markNotificationAsRead(id));
    },
    [dispatch]
  );

  return (
    <>
      <div className={css(styles.menuItem)} onClick={handleToggleDrawer}>
        Your notifications
      </div>

      <div className={css(styles.notificationItems)} ref={DrawerRef}>
        {filteredNotifications.length > 0 ? (
          <>
            <p className={css(styles.p)}>Here is the list of notifications</p>
            <button
              onClick={handleToggleDrawer}
              aria-label="Close"
              className={css(styles.button)}
            >
              <img src={closeIcon} alt="close icon" />
            </button>
            <ul className={css(styles.ul)}>
              {filteredNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  id={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  markAsRead={handleMarkNotificationAsRead}
                />
              ))}
            </ul>
          </>
        ) : (
          <p className={css(styles.p)}>No new notifications for now</p>
        )}
      </div>
    </>
  );
});

export default Notifications;
