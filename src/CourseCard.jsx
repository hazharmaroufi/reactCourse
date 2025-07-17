import React from "react";

function CourseCard({ data: { name, desc } }) {
  return (
    <li>
      <h4>{name}</h4>
      <p>{desc}</p>
    </li>
  );
}

export default CourseCard;
