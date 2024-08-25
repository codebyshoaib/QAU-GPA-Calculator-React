import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import CourseForm from "./CourseForm";
import CourseList from "./CourseList";
import EditForm from "./EditForm";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function Calculator() {
  const [courses, setCourses] = useState([]);
  const [gpa, setGpa] = useState(null);

  const addCourse = (course) => {
    setCourses(prevCourses => [
      ...prevCourses,
      { id: uuidv4(), name: course.name, marks: course.marks, credits: course.credits }
    ]);
  };

  const deleteCourse = (id) => {
    const courseToRemove = courses.find(course => course.id === id);
    if (!courseToRemove) return;

    const updatedCourses = courses.map(course =>
      course.id === id ? { ...course, isRemoving: true } : course
    );
    setCourses(updatedCourses);
    

    setTimeout(() => {
      setCourses(prevCourses => prevCourses.filter(course=> course.id !== id));
    }, 300);
  };

  const editCourse = (id, updatedCourse = null) => {
    setCourses(courses.map(course =>
      course.id === id
        ? {
            ...course,
            isEditing: updatedCourse === null ? !course.isEditing : false,
            name: updatedCourse?.name ?? course.name,
            marks: updatedCourse?.marks ?? course.marks,
            credits: updatedCourse?.credits ?? course.credits
          }
        : course
    ));
  };

  const calculateGPA = () => {
    if (courses.length === 0) return;
    const totalCredits = courses.reduce((acc, course) => acc + Number(course.credits), 0);
    const totalPoints = courses.reduce((acc, course) => acc + getGradePoints(course.marks, course.credits), 0);
    setGpa((totalPoints / totalCredits).toFixed(2));
  };

  const getGradePoints = (marks, unit) => {
    if (marks >= 80) return 4 * unit;
    if (marks >= 76) return 3.8 * unit;
    if (marks >= 72) return 3.5 * unit;
    if (marks >= 68) return 3 * unit;
    if (marks >= 64) return 2.8 * unit;
    if (marks >= 60) return 2.5 * unit;
    if (marks >= 55) return 2 * unit;
    if (marks >= 50) return 1 * unit;
    return 0;
  };

  return (
    <div className="CalculatorWrapper">
      <div className="no-print">
      <CourseForm addCourse={addCourse} />
      </div>
        <TransitionGroup>
          <h3>{courses.length!==0 ? `Your Courses`:'No Course Added Yet'}</h3>
          {courses.map(course =>
            <CSSTransition
              key={course.id}
              timeout={500}
              classNames="course"
            >
              {course.isEditing ? (
                <EditForm editCourse={editCourse} course={course} />
              ) : (
                <CourseList
                  course={course}
                  editCourse={editCourse}
                  deleteCourse={deleteCourse}
                  className={course.isRemoving ? 'removing' : ''}
                />
              )}
            </CSSTransition>
          )}
        </TransitionGroup>

      <div className="btns no-print">
        <button className="clc-bt" onClick={calculateGPA}>Calculate GPA</button>
        <CSSTransition
          in={gpa !== null}
          timeout={500}
          classNames="print-bt"
          unmountOnExit
          appear
        >
          <button className="print-bt" onClick={()=>{
            window.print();
          }}>Print Data</button>
        </CSSTransition>
      </div>
      {gpa !== null && (
        <div className="gpa-display" >
          <h2>GPA: {gpa}</h2>
        </div>
      )}
    </div>
  );
}

export default Calculator;
