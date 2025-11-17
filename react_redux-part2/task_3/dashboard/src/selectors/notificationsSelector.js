import { createSelector } from "@reduxjs/toolkit";

export const getNotifications = (state) => state.notifications.notifications;

/**
 * Memoized selector : filtre les notifs selon "all" | "urgent" | "default"
 */
export const getFilteredNotifications = createSelector(
  [getNotifications, (_, filter) => filter],
  (notifications, filter) => {
    if (!notifications) return [];

    if (filter === "urgent") {
      return notifications.filter((n) => n.type === "urgent");
    }

    if (filter === "default") {
      return notifications.filter((n) => n.type === "default");
    }

    // "all"
    return notifications;
  }
);
