import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
uuidv4();
import "./Calculator.css";
import CourseForm from "./CourseForm";
import CourseList from "./CourseList";
import EditForm from "./EditForm";

function Calculator() {
  
  const [courses, setCourses] = useState([]);
  
  function addCourse(course) {
    setCourses([
      ...courses,
      { id: uuidv4(), name: course.name, marks: course.marks, credits: course.credits }
    ]);
  }
  

  const editCourse = (id, updatedCourse = null) => {
    setCourses(
      courses.map((course) =>
        course.id === id
          ? {
              ...course,
              isEditing: updatedCourse === null ? !course.isEditing : false,
              name: updatedCourse !== null ? updatedCourse.name : course.name,
              marks: updatedCourse !== null ? updatedCourse.marks : course.marks,
              credits: updatedCourse !== null ? updatedCourse.credits : course.credits,
            }
          : course
      )
    );
  };
  

  return (
    <>
      <div className="CalculatorWrapper">
        <CourseForm  addCourse={addCourse}/>
        {courses.map((course, index) =>
          course.isEditing ? (
            <EditForm key={index}
            editCourse={editCourse}
            course={course} />
          ) : (
            <CourseList
              course={course}
              key={index}
              editCourse={editCourse}
            />
          )
        )}
        <div className="btns">
          <button className="clc-bt">Calculate GPA</button>
        </div>
      </div>
    </>
  );
}
export default Calculator;
