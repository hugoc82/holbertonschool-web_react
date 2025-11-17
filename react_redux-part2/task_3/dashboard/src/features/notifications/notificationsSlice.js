import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const initialState = {
  notifications: [],
  displayDrawer: true,
};

/**
 * Thunk : récupère les notifs et renvoie seulement les non lues
 * en normalisant les champs (id, type, isRead, value).
 * Gère les deux formats possibles : direct (isRead, type, value)
 * ou imbriqué dans "context".
 */
export const fetchNotifications = createAsyncThunk(
  "notifications/fetchNotifications",
  async () => {
    const response = await axios.get("/notifications.json");
    const { notifications = [] } = response.data || {};

    const unreadNotifications = notifications
      .filter((n) => {
        const isRead = n.isRead ?? (n.context ? n.context.isRead : undefined);

        // Si explicitement true → on filtre
        if (isRead === true) return false;
        // false ou undefined → on considère comme non lu
        return true;
      })
      .map((n) => {
        const context = n.context || {};
        return {
          id: n.id,
          type: n.type ?? context.type ?? "default",
          isRead: n.isRead ?? context.isRead ?? false,
          value: n.value ?? context.value ?? "",
        };
      });

    return unreadNotifications;
  }
);

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    markNotificationAsRead: (state, action) => {
      state.notifications = state.notifications.filter(
        (n) => n.id !== action.payload
      );
      console.log(`Notification ${action.payload} has been marked as read`);
    },
    showDrawer: (state) => {
      state.displayDrawer = true;
    },
    hideDrawer: (state) => {
      state.displayDrawer = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      state.notifications = action.payload;
    });
    // ⚠️ on ne touche PAS au state pour pending / rejected
  },
});

export const { markNotificationAsRead, showDrawer, hideDrawer } =
  notificationsSlice.actions;

export default notificationsSlice.reducer;
