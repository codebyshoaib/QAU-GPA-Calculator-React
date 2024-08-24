import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

function CourseList({ course, editCourse, deleteCourse }) {
  return (
    <div className={`courseList ${course.removing ? 'removing' : ''}`}>
      <div className="name">
        <p>{course.name}</p>
      </div>
      <div className="marks">
        <p>{course.marks}</p>
      </div>
      <div className="credits">
        <p>{course.credits}</p>
      </div>
      <div className='f-icons'>
        <FontAwesomeIcon
          onClick={() => editCourse(course.id)}
          icon={faPenToSquare}
        />
        <FontAwesomeIcon
          onClick={() => deleteCourse(course.id)}
          icon={faTrash}
        />
      </div>
    </div>
  );
}

export default CourseList;
