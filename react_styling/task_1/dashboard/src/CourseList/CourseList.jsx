import React from "react";
import PropTypes from "prop-types";
import CourseListRow from "./CourseListRow.jsx";

/**
 * Exigences :
 * - Conteneur responsive qui fait ~80–90% de la largeur
 * - Table prend 100% de la largeur du conteneur
 * - Centrer le conteneur avec espacements
 * - AUCUNE importation de fichier CSS ici
 * - Ne pas supprimer classes/ids existants (on garde l'id si déjà utilisé)
 */

function CourseList({ listCourses }) {
  return (
    <div
      className="w-11/12 md:w-4/5 lg:w-4/5 mx-auto my-8 overflow-x-auto"
      id="CourseListContainer"
    >
      <table className="w-full table-auto border-collapse" id="CourseList">
        <thead>
          <CourseListRow isHeader={true} textFirstCell="Available courses" />
          <CourseListRow
            isHeader={true}
            textFirstCell="Course name"
            textSecondCell="Credit"
          />
        </thead>
        <tbody>
          {(!listCourses || listCourses.length === 0) ? (
            <CourseListRow
              textFirstCell="No course available yet"
              textSecondCell={null}
            />
          ) : (
            listCourses.map(({ id, name, credit }) => (
              <CourseListRow
                key={id}
                textFirstCell={name}
                textSecondCell={credit}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

CourseList.defaultProps = {
  listCourses: [],
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      credit: PropTypes.number.isRequired,
    })
  ),
};

export default CourseList;
