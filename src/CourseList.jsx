import CourseCard from "./CourseCard";

function CourseList() {
  const courses = [
    { id: 1, name: "javaScript", desc: "This is js course" },
    { id: 4, name: "react", desc: "This is react course" },
    { id: 2, name: "next", desc: "This is next course" },
    { id: 3, name: "node", desc: "This is node course" },
  ];
  return (
    <div>
      <h3>Course List</h3>
      {
        <ul>
          {courses.map((course) => (
            <CourseCard key={course.id} data={course} />
          ))}
        </ul>
      }
    </div>
  );
}

export default CourseList;
