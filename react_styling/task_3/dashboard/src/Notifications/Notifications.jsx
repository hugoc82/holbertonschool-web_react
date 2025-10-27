import React from 'react';
import NotificationItem from './NotificationItem.jsx';

export default function Notifications({ displayDrawer = false }) {
  if (!displayDrawer) {
    return <div className="notification-title px-3 py-2">Your notifications</div>;
  }

  return (
    <div
      className={[
        'Notifications notification-drawer',
        'fixed top-0 right-0 w-[380px] max-w-full bg-white border-l-2 border-b-2 shadow',
        'max-[912px]:inset-0 max-[912px]:w-screen max-[912px]:h-screen max-[912px]:border-0 max-[912px]:p-4 max-[912px]:overflow-y-auto',
      ].join(' ')}
      role="region"
      aria-label="Notifications"
      style={{ borderColor: 'var(--main-color)' }}
    >
      <div className="notification-title font-bold px-4 py-3 border-b max-[912px]:px-2">
        Your notifications
      </div>
      <div className="notification-items p-4 max-[912px]:p-2">
        <p className="mb-3">Here is the list of notifications</p>
        <ul className="ml-5 list-disc max-[912px]:list-none max-[912px]:ml-0">
          <NotificationItem type="default" value="New course available" />
          <NotificationItem type="urgent" value="New resume available" />
          <NotificationItem
            type="urgent"
            html={{ __html: '<strong>Urgent requirement</strong> - complete by EOD' }}
          />
        </ul>
        <button
          aria-label="Close"
          onClick={() => {}}
          className="absolute top-2 right-2 h-8 w-8 rounded hover:bg-gray-100"
          title="Close"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
