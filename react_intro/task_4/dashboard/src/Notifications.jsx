import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "./utils";
import closeIcon from "./assets/close-button.png";

function Notifications() {
  const handleClose = () => {
    console.log("Close button has been clicked");
  };

  return (
    <div className="notification-items">
      {/* Bouton à droite (style inline exigé) */}
      <button
        type="button"
        aria-label="Close"
        onClick={handleClose}
        style={{
          position: "absolute",
          right: "8px",
          top: "8px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: 0,
          lineHeight: 0,
        }}
      >
        <img src={closeIcon} alt="close" style={{ width: "12px", height: "12px" }} />
      </button>

      {/* Titre */}
      <p>Here is the list of notifications</p>

      {/* 3 items EXACTS */}
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
}

export default Notifications;
