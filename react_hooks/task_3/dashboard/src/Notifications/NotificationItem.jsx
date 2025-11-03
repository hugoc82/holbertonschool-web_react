// ⚠️ N’importe que ce que tu utilises (pas de "import React from 'react'")
import { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';

function Notifications({
  displayDrawer = false,
  listNotifications = [],
  markNotificationAsRead,
  handleDisplayDrawer,
  handleHideDrawer,
}) {
  // callbacks stables
  const onClose = useCallback(() => {
    if (typeof handleHideDrawer === 'function') handleHideDrawer();
  }, [handleHideDrawer]);

  const onOpen = useCallback(() => {
    if (typeof handleDisplayDrawer === 'function') handleDisplayDrawer();
  }, [handleDisplayDrawer]);

  return (
    <>
      <div className="menuItem" onClick={onOpen}>Your notifications</div>

      {displayDrawer && (
        <div className="Notifications">
          <button
            aria-label="Close"
            onClick={onClose}
            style={{ float: 'right' }}
          >
            x
          </button>

          <p>Here is the list of notifications</p>

          <ul>
            {(!listNotifications || listNotifications.length === 0) ? (
              <NotificationItem type="default" value="No new notification for now" />
            ) : (
              listNotifications.map((notif) => (
                <NotificationItem
                  key={notif.id}
                  id={notif.id}
                  type={notif.type}
                  value={notif.value}
                  html={notif.html}
                  markAsRead={markNotificationAsRead}
                />
              ))
            )}
          </ul>
        </div>
      )}
    </>
  );
}

// ----- Mémoïsation (équivalent PureComponent / shouldComponentUpdate) -----
// Ne re-render QUE si ce comparateur retourne false.
function areEqual(prev, next) {
  if (prev.displayDrawer !== next.displayDrawer) return false;

  const prevList = prev.listNotifications || [];
  const nextList = next.listNotifications || [];
  if (prevList.length !== nextList.length) return false;

  // comparaison superficielle élément par élément (id/type/value/html.__html)
  for (let i = 0; i < prevList.length; i++) {
    const a = prevList[i];
    const b = nextList[i];
    if (a.id !== b.id) return false;
    if (a.type !== b.type) return false;
    if (a.value !== b.value) return false;
    const aHtml = a?.html?.__html ?? null;
    const bHtml = b?.html?.__html ?? null;
    if (aHtml !== bHtml) return false;
  }

  // Conserver la comparaison par référence sur les fonctions (fidèle à PureComponent)
  if (prev.markNotificationAsRead !== next.markNotificationAsRead) return false;
  if (prev.handleDisplayDrawer !== next.handleDisplayDrawer) return false;
  if (prev.handleHideDrawer !== next.handleHideDrawer) return false;

  return true; // => props "égales" => PAS de re-render
}

const MemoNotifications = memo(Notifications, areEqual);

MemoNotifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string,
      value: PropTypes.string,
      html: PropTypes.shape({ __html: PropTypes.string }),
    })
  ),
  markNotificationAsRead: PropTypes.func,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

export default MemoNotifications;
