import React, { PureComponent } from "react";
import PropTypes from "prop-types";

/**
 * NotificationItem (Pure)
 * - Rend un <li> pour une notification
 * - Cliquer l'�l�ment appelle markAsRead(id)
 * - PureComponent => re-render seulement si props/state changent
 */
class NotificationItem extends PureComponent {
  handleClick = () => {
    const { markAsRead, id } = this.props;
    if (typeof markAsRead === "function") {
      markAsRead(id);
    }
  };

  render() {
    const { type, value, html } = this.props;

    // Couleur simple comme dans les t�ches pr�c�dentes
    const color = type === "urgent" ? "red" : "blue";

    return (
      <li
        data-notification-type={type}
        style={{ color }}
        onClick={this.handleClick}
        role="listitem"
      >
        {html ? <span dangerouslySetInnerHTML={html} /> : value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  /** Identifiant non 0-based attendu par les tests */
  id: PropTypes.number.isRequired,
  /** "default" ou "urgent" */
  type: PropTypes.oneOf(["default", "urgent"]),
  /** Texte affich� si pas de html */
  value: PropTypes.string,
  /** Contenu HTML: { __html: "<strong>...</strong>" } */
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  /** Callback cliqu� -> markAsRead(id) */
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: "default",
  value: "",
  html: null,
  markAsRead: () => {},
};

export default NotificationItem;
