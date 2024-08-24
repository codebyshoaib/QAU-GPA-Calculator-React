import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
function CourseList({ course, editCourse }) {
  return (
    <>
      <div className="courseList">
        <div className="name">
          <p>{course.name}</p>
        </div>
        <div className="marks">
          <p>{course.marks}</p>
        </div>
        <div className="credits">
          <p>{course.credits}</p>
        </div>

        <div>
          <FontAwesomeIcon
            onClick={() => editCourse(course.id)}
            icon={faPenToSquare}
          />
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
    </>
  );
}

export default CourseList;
