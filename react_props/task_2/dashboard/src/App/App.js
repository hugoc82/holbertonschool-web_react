import React, { Fragment } from "react";
import Notifications from "../Notifications/Notifications";

export default function App() {
  // "random unique number" -> pour les tests on fixe des ids prévisibles aussi :
  const notificationsList = [
    { id: Math.floor(Math.random() * 1e6) + 1, type: "default", value: "New course available" },
    { id: Math.floor(Math.random() * 1e6) + 2, type: "urgent", value: "New resume available" },
    { id: Math.floor(Math.random() * 1e6) + 3, type: "urgent", html: { __html: "<strong>Urgent requirement</strong> - complete by EOD" } },
  ];

  return (
    <Fragment>
      <Notifications notifications={notificationsList} />
    </Fragment>
  );
}
