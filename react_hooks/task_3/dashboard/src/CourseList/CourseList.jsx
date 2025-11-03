import React from 'react';
import PropTypes from 'prop-types';

export default function CourseList({ listCourses = [] }) {
  if (!listCourses.length) {
    return <p>No course available yet</p>;
  }

  return (
    <div className="course-list-wrapper overflow-x-auto">
      <table className="min-w-full border-collapse text-sm md:text-base">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left px-3 py-2 border">Course name</th>
            <th className="text-left px-3 py-2 border">Credit</th>
          </tr>
        </thead>
        <tbody>
          {listCourses.map((c) => (
            <tr key={c.id} className="odd:bg-white even:bg-gray-50">
              <td className="px-3 py-2 border">{c.name}</td>
              <td className="px-3 py-2 border">{c.credit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      credit: PropTypes.number,
    })
  ),
};
