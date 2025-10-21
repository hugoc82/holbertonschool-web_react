import React from 'react';
import CourseList from './src/CourseList/CourseList.jsx';

const listCourses = [];

function App() {
  return (
    <div>
      <CourseList listCourses={listCourses} />
    </div>
  );
}

export default App;