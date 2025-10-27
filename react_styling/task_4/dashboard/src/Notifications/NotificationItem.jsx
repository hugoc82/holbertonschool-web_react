import React from 'react';
import PropTypes from 'prop-types';

export default function NotificationItem({ type = 'default', value, html }) {
  // couleurs via variables existantes
  const color =
    type === 'urgent'
      ? 'var(--urgent-notification-item, var(--main-color))'
      : 'var(--default-notification-item, inherit)';

  return (
    <li
      data-notification-type={type}
      className={[
        'notification-item',
        // taille de texte responsive
        'text-sm md:text-base leading-snug',
        // padding + bordure adaptés en mobile
        'max-[912px]:px-3 max-[912px]:py-3 max-[912px]:border-b max-[912px]:border-gray-200',
        // un peu d’air aussi en desktop
        'py-1',
      ].join(' ')}
      style={{ color }}
      {...(html ? { dangerouslySetInnerHTML: html } : {})}
    >
      {!html && value}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.oneOf(['default', 'urgent']),
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
};
