import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function CourseForm({ addCourse }) {
  const [name, setName] = useState('');
  const [marks, setMarks] = useState('');
  const [credits, setCredits] = useState('');

  const handleChange = (setter) => (e) => setter(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    addCourse({ 
      name, 
      marks: parseFloat(marks),
      credits: parseFloat(credits)
    });
    setName('');
    setMarks('');
    setCredits('');
  };

  return (
    <form className="course-form" onSubmit={handleSubmit}>
      <input
        value={name}
        type="text"
        placeholder="Course Name"
        className="course-name"
        onChange={handleChange(setName)}
      />
      <input
        value={marks}
        type="number"
        placeholder="Obt. Marks"
        className="marks"
        onChange={handleChange(setMarks)}
      />
      <input
        value={credits}
        type="number"
        placeholder="Credit Hrs."
        className="credits"
        onChange={handleChange(setCredits)}
      />
      <button type="submit" className="add-btn">
       <FontAwesomeIcon icon={faAdd}/>
      </button>
    </form>
  );
}

export default CourseForm;
