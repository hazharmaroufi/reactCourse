import React from "react";
function CourseList() {
  const courses = ["javaScript", "next", "node", "react"];
  return (
    <div>
      <h3>Course List</h3>
      {
        <ul>
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      }
    </div>
  );
}

export default CourseList;
