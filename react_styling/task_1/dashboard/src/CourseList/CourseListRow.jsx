import React from "react";
import PropTypes from "prop-types";

/**
 * Règles demandées :
 * - Couleur de fond conditionnelle avec les variables CSS déclarées dans main.css
 * - Opacité 66% pour les lignes d'en-tête, 45% sinon
 * - Bordure autour des cellules (gray-400)
 * - Padding-left: 8px pour les <td>
 * - AUCUNE importation de fichiers CSS ici
 */

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  // Utilise color-mix pour appliquer l’opacité tout en gardant les variables CSS
  const rowStyle = {
    background:
      isHeader
        ? "color-mix(in srgb, var(--color-table-header) 66%, transparent)"
        : "color-mix(in srgb, var(--color-table-rows) 45%, transparent)",
  };

  if (isHeader) {
    if (textSecondCell === null || textSecondCell === undefined) {
      return (
        <tr style={rowStyle}>
          <th
            className="border border-gray-400 text-left"
            colSpan={2}
          >
            {textFirstCell}
          </th>
        </tr>
      );
    }
    return (
      <tr style={rowStyle}>
        <th className="border border-gray-400 text-left">{textFirstCell}</th>
        <th className="border border-gray-400 text-left">{textSecondCell}</th>
      </tr>
    );
  }

  return (
    <tr style={rowStyle}>
      <td className="border border-gray-400 pl-2">{textFirstCell}</td>
      <td className="border border-gray-400 pl-2">{textSecondCell}</td>
    </tr>
  );
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
