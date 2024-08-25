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
        placeholder="Course"
        className="course-name"
        required
        onChange={handleChange(setName)}
      />
      <input
        value={marks}
        type="number"
        placeholder="Marks"
        className="marks"
        max={100}
        min={0}
        required
       
        onChange={handleChange(setMarks)}
      />
      <input
        value={credits}
        type="number"
        placeholder="Credits"
        className="credits"
        max={4}
        min={1}
        required
        onChange={handleChange(setCredits)}
      />
      <button type="submit" className="add-btn">
       <FontAwesomeIcon icon={faAdd}/>
      </button>
    </form>
  );
}

export default CourseForm;
