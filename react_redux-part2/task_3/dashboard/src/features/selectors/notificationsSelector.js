// src/features/selectors/notificationSelector.js
import { createSelector } from "@reduxjs/toolkit";

/**
 * Input selector: récupère la liste des notifications du slice
 */
const selectNotifications = (state) => state.notifications?.notifications ?? [];

/**
 * Input selector: récupère le filtre passé en "props" (2e argument)
 * à getFilteredNotifications (via useSelector ou dans les tests).
 *
 * Exemple d'appel :
 *   getFilteredNotifications(state, 'urgent')
 */
const selectFilter = (state, filter) => (filter || "all").toLowerCase();

/**
 * getFilteredNotifications (mémoïsé)
 *
 * - Prend (state, filter) en paramètres
 * - Ne retourne que les notifications "unread" (isRead !== true)
 * - Si filter = 'urgent'  → garde seulement type 'urgent'
 * - Si filter = 'default' → garde seulement type 'default'
 * - Sinon (ou 'all')      → garde toutes les unread
 */
export const getFilteredNotifications = createSelector(
  [selectNotifications, selectFilter],
  (notifications, filter) => {
    // On garde uniquement les notifications non lues
    const unread = notifications.filter((notification) => !notification.isRead);

    if (filter === "urgent") {
      return unread.filter((n) => n.type === "urgent");
    }

    if (filter === "default") {
      return unread.filter((n) => n.type === "default");
    }

    // 'all' (ou autre) → toutes les non lues
    return unread;
  }
);

export default getFilteredNotifications;
