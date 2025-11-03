// ⚠️ Pas d'import React par défaut (règle projet) ; on n'importe que ce qu'on utilise
import { memo, useCallback } from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type = 'default', value, html, id, markAsRead }) {
  const handleClick = useCallback(() => {
    if (typeof markAsRead === 'function') {
      markAsRead(id);
    }
  }, [markAsRead, id]);

  // ⚠️ Conserver le même markup/attrs que la version classe (data-notification-type, etc.)
  if (html && html.__html) {
    return (
      <li
        data-notification-type={type}
        onClick={handleClick}
        dangerouslySetInnerHTML={html}
      />
    );
  }

  return (
    <li data-notification-type={type} onClick={handleClick}>
      {value}
    </li>
  );
}

// --- Mémoïsation ---
// Émuler le comportement de PureComponent (comparaison superficielle des props).
// On compare champ par champ y compris html.__html (objet stable ou pas).
function propsAreEqual(prev, next) {
  if (prev.id !== next.id) return false;
  if (prev.type !== next.type) return false;
  if (prev.value !== next.value) return false;

  const prevHtml = prev.html?.__html || null;
  const nextHtml = next.html?.__html || null;
  if (prevHtml !== nextHtml) return false;

  // markAsRead est une fonction: si sa ref change, on considère que rien n'a changé côté rendu,
  // mais PureComponent le comparerait aussi par ref. Pour rester fidèle, on compare la ref:
  if (prev.markAsRead !== next.markAsRead) return false;

  return true; // pas de re-render
}

const MemoNotificationItem = memo(NotificationItem, propsAreEqual);

MemoNotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  id: PropTypes.number,
  markAsRead: PropTypes.func,
};

export default MemoNotificationItem;
