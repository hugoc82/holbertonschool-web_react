// src/features/selectors/notificationSelector.js
import { createSelector } from "reselect";

// On récupère le tableau des notifications dans le slice
const notificationsState = (state) => state.notifications.notifications || [];

/**
 * The memoized selector getFilteredNotifications returns
 * all the unread notification items, OR the ones with type urgent, OR default
 */
export const getFilteredNotifications = createSelector(
  [notificationsState],
  (notifications) =>
    notifications.filter(
      (notif) =>
        notif.isRead === false ||
        notif.type === "urgent" ||
        notif.type === "default"
    )
);
