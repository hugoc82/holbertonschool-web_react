// task_2/dashboard/src/Notifications.jsx
import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "./utils";
// Si ton fichier s'appelle close-icon.png, remplace la ligne suivante :
import closeIcon from "./assets/close-button.png";

function Notifications() {
  const handleClose = () => {
    // Message EXACT demandé
    // (évite les template strings superflus pour ne pas changer la chaîne)
    console.log("Close button has been clicked");
  };

  return (
    <div className="notification-items">
      {/* Bouton placé à droite -> style inline demandé */}
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
        <img
          src={closeIcon}
          alt="close"
          style={{ width: "12px", height: "12px" }}
        />
      </button>

      <p>Here is the list of notifications</p>

      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          // HTML imposé par l'énoncé -> dangerouslySetInnerHTML
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        />
      </ul>
    </div>
  );
}

export default Notifications;
