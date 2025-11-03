import './CourseList.css';

export default function CourseList({ courses = [] }) {
  return (
    <table role="table">
      <thead>
        {/* 1ère ligne d'entête */}
        <tr role="row">
          <th role="columnheader" colSpan={2}>Available courses</th>
        </tr>
        {/* 2ème ligne d'entête */}
        <tr role="row">
          <th role="columnheader">Course name</th>
          <th role="columnheader">Credit</th>
        </tr>
      </thead>

      <tbody>
        {courses.length === 0 ? (
          <tr role="row">
            <td role="cell" colSpan={2}>No course available yet</td>
          </tr>
        ) : (
          courses.map((c) => (
            <tr role="row" key={c.id}>
              <td role="cell">{c.name}</td>
              <td role="cell">{c.credit}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
